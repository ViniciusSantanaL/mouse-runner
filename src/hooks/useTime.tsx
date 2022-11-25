import { createContext, useContext, useState } from "react"

type TimesType = {
    timeInSeconds:number;
    timeInMiliseconds: number;
}

type TimeContextProps =  {
    times: TimesType[]
    handleApplyTime: (value: TimesType) => void;
    clearTimes: () => void;
}


type TimeProviderProps = {
    children: React.ReactNode
}

const TimeContext = createContext<TimeContextProps>({} as TimeContextProps);

export function TimeProvider({children}: TimeProviderProps) {

    const handleApplyTime = (value: TimesType) => {
        setTimes([...times,value])
        performance.clearResourceTimings();
    };

    const clearTimes = () => setTimes([]);

    const [times, setTimes] = useState<TimesType[]>([]);
    return (
        <TimeContext.Provider value={{times,handleApplyTime,clearTimes}}>
            {children}
        </TimeContext.Provider>
    )
}

export function useTime() {
    const context = useContext(TimeContext);
    return context;
}