import React, { FunctionComponent, createContext, useState, useCallback, useContext } from "react";
import { View, Text } from "react-native";



type AppContextType = {
  handleSelectImage: (image: any) => void;
  image: [] | null;
  loading: boolean;
  handleLoading: (loadingValue: boolean) => void;
};

const AppContext = createContext<AppContextType>({
  image: [],
  handleSelectImage: () => {},
  loading: false,
  handleLoading: ()=> {}

}); 

export const AppProvider: FunctionComponent = ({ children }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false)
  const handleSelectImage = useCallback((currentImage) => {
    const newImage = currentImage;

    setImage(newImage);
  }, []);

  const handleLoading = useCallback((loadingValue)=>{

    setLoading(loadingValue)
  }, [])

  
  return (
    <AppContext.Provider value={{ image, handleSelectImage, loading, handleLoading }}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => useContext(AppContext);