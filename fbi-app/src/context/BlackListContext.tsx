import { createContext, useEffect, useState } from "react";
import { detailPersonProps, peopleProps, personProps } from '../types/suspects'

type IContext = {
    blackList: peopleProps[];
    addSuspect: (_suspect: peopleProps) => void;
    removeSuspect: (_id: string) => void;
}

export const BlackListContext = createContext<IContext>({
    blackList: [],
    addSuspect: (_suspect: peopleProps) => { },
    removeSuspect: (_id: string) => { }
});

type IProvider = {
    children: JSX.Element
}

export function BlackListProvider({ children }: IProvider) {
    const [blackList, setBlackList] = useState<peopleProps[]>([]);

    async function addSuspect(suspect: peopleProps) {
        const reply = await blackList.find( _suspect => {
            if (_suspect._id === suspect._id) {
                return true;
            }
        })

        if(reply){
            return
        }

        setBlackList([...blackList, suspect]);

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