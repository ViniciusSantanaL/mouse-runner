import { createContext, useContext, useState } from 'react';

interface MessageContextProps {
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

interface MessageProviderProps {
    children: React.ReactNode;
}
const MessageContext = createContext<MessageContextProps>({} as MessageContextProps);

export function MessageProvider({ children }: MessageProviderProps) {
    const [message, setMessage] = useState<string>('');
    return <MessageContext.Provider value={{ message, setMessage }}>{children}</MessageContext.Provider>;
}
export function useMessage() {
    const context = useContext(MessageContext);

    return context;
}
