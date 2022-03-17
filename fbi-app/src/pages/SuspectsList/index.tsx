import { useEffect, useState } from 'react'
import api from '../../api/axios'
import Person from '../../components/Person';
import { peopleProps } from '../../types/suspects';
import * as S from './style'

export default function SuspectList() {

    const [suspects, setSuspects] = useState<peopleProps[]>([]);

    useEffect(() => {
        api.get("/person")
            .then((response) => {
                setSuspects(response.data);
            }).catch((err) => {
                console.error(err);
            });
    }, [])

    return (
        <>
            <S.subTitle>Suspects List</S.subTitle>
            <S.listContainer>
                {suspects.map((suspect) => (
                    <Person simpleMode={false} suspect={suspect} key={suspect._id}/>
                ))}
            </S.listContainer>
        </>
    )
}