import { createContext, useEffect, useState } from "react";
import { detailPersonProps } from '../types/suspects'

type IContext = {
    blackList: detailPersonProps[];
    addSuspect: (_suspect: any) => void;
    removeSuspect: (_id: string) => void;
}

export const BlackListContext = createContext<IContext>({
    blackList: [],
    addSuspect: (_suspect: any) => {},
    removeSuspect: (_id: string) => {}
});

type IProvider = {
    children: JSX.Element
}

export function BlackListProvider({ children }: IProvider) {
    const [blackList, setBlackList] = useState<detailPersonProps[]>([]);

    function addSuspect(suspect: any) {
        setBlackList([...blackList, suspect])
    }

    function removeSuspect(id: string) {
        const newList = blackList.filter((suspect) => suspect._id !== id)
        setBlackList(newList);
    }

    useEffect(() => {
        console.log(blackList);
    }, [blackList])

    return (
        <BlackListContext.Provider
            value={{
                addSuspect,
                removeSuspect,
                blackList
            }}>
            {children}
        </BlackListContext.Provider>
    )
}