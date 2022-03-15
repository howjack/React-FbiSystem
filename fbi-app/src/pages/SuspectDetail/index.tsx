import { useEffect, useState } from "react";
import * as S from './style'
import { useParams } from "react-router-dom"
import api from "../../api/axios";
import Person from "../../components/Person";
import { detailPersonProps } from "../../types/suspects";
import ProfileCard from "../../components/ProfileCard";

export default function SuspectDetail() {
    const { id } = useParams();
    const [person, setPerson] = useState<detailPersonProps>([]);
    const [exist, setExist] = useState<boolean>(false);

    useEffect(() => {
        api.get(`/person?_id=${id}`)
            .then(({ data }) => {
                if (data[0]) {
                    setPerson(data);
                    setExist(true);
                }
            }).catch((err) => {
                console.error(err);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {exist && <S.container>
                <ProfileCard person={person[0]} />
                {person[0].participants && <S.participantsContainer>
                    <h3>Participants:</h3>
                    <S.listContainer>
                        {person[0].participants.map((suspect) => (
                            <Person suspect={suspect} key={suspect.name} />
                        ))}
                    </S.listContainer>
                </S.participantsContainer>}
            </S.container>
            }
        </>
    )
}