import { createContext, useContext, useState } from 'react';

interface LoadingContextData {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LoadingProviderProps {
    children: React.ReactNode;
}

const LoadingContext = createContext<LoadingContextData>({} as LoadingContextData);

export function LoadingProvider({ children }: LoadingProviderProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return <LoadingContext.Provider value={{ isLoading, setIsLoading }}>{children}</LoadingContext.Provider>;
}

export function useLoading() {
    const context = useContext(LoadingContext);

    return context;
}
