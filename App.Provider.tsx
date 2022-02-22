import React, {
  FunctionComponent,
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AppContextType = {
  handleSelectImage: (image: any) => void;
  image: [] | null;
  loading: boolean;
  handleLoading: (loadingValue: boolean) => void;
  apiKey: String | null;
  saveApiKey: (apiKey: string) => void;
  data: {
    defendant: string | null;
    plantiff: string | null;
    courtName: string | null;
    caseNumber: string | null;
    date: number;
  };
};

const AppContext = createContext<AppContextType>({
  image: [],
  handleSelectImage: () => {},
  loading: false,
  handleLoading: () => {},
  apiKey: null,
  saveApiKey: () => {},
  data: {
    defendant: '',
    plantiff: '',
    courtName: '',
    caseNumber: '',
    date: Date.now(),
  },
});

export const AppProvider: FunctionComponent = ({ children }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [data, dataHandler] = useState({
    defendant: null,
    plantiff: "",
    courtName: "",
    caseNumber: "",
    date: Date.now(),
  });

  useEffect(() => {
    //check for apiKey in
    getApiKey();
  }, []);

  //Get api key
  const getApiKey = async () => {
    setLoading(true);
    try {
      const result = await AsyncStorage.getItem("@apiKey");

     

      if (result != null) {
        setApiKey(result);

       
      }else{
        setApiKey(null)
      }
    } catch (error) {
      
    }
    setLoading(false);
  };

  const saveApiKey = async (data: string) => {
    try {
      await AsyncStorage.setItem("@apiKey", data);

      setApiKey(data);
    } catch (error) {}
  };

  const handleSelectImage = useCallback((currentImage) => {
    const newImage = currentImage;

    setImage(newImage);
  }, []);

  const handleLoading = useCallback((loadingValue) => {
    setLoading(loadingValue);
  }, []);

  const submitJobsToServemanager = useCallback(async()=> {
    setLoading(true)
    try {
      

      
    } catch (error) {
      
    }
    setLoading(false)
  }, [])

  return (
    <AppContext.Provider
      value={{
        image,
        handleSelectImage,
        loading,
        handleLoading,
        apiKey,
        saveApiKey,
        data
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
