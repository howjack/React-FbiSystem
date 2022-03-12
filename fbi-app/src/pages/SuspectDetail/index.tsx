import { useEffect, useState } from "react";
import * as S from './style'
import { useParams } from "react-router-dom"
import api from "../../api/axios";
import Person from "../../components/Person";

export default function SuspectDetail() {
    const { id } = useParams();
    const [person, setPerson] = useState<any>([]);
    const [exist, setExist] = useState<boolean>(false);

    useEffect(() => {
        api.get(`/person?_id=${id}`)
            .then(({ data }) => {
                if(data[0]){
                    setPerson(data);
                    console.log(data);
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
                <S.profileContainer>
                    <S.topContainer>
                        <img src={person[0].picture} alt="asd" />
                        <h3>{person[0].name}</h3>
                    </S.topContainer>
                    <S.infoContainer>
                        <p><span>ID:</span> {person[0]._id}</p>
                        <p><span>AGE:</span> {person[0].age}</p>
                        <p><span>GENDER:</span> {person[0].gender}</p>
                        <p><span>EYE COLOR:</span> {person[0].eyeColor}</p>
                        <p><span>BALANCE:</span> {person[0].balance}</p>
                        <p><span>COMPANY:</span> {person[0].company}</p>
                        <p><span>EMAIL:</span> {person[0].email}</p>
                        <p><span>PHONE:</span> {person[0].phone}</p>
                        <p><span>REGISTERED:</span> {person[0].registered}</p>
                        <p><span>ABOUT:</span> {person[0].about}</p>
                        <p><span>ADDRESS:</span> {person[0].address}</p>
                        <p><span>LONGITUDE:</span> {person[0].longitude}</p>
                        <p><span>LATITUDE:</span> {person[0].latitude}</p>
                    </S.infoContainer>
                </S.profileContainer>
                <S.participantsContainer>
                    <h3>Participants:</h3>
                    <S.listContainer>
                        {person[0].participants.map((suspect: any) => (
                            <Person suspect={suspect} key={suspect.name}/>
                        ))}
                    </S.listContainer>
                </S.participantsContainer>
            </S.container>
            }
        </>
    )
}