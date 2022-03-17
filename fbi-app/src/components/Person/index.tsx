import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { BlackListContext } from '../../context/BlackListContext';
import { personProps } from '../../types/suspects'
import * as S from './style'

export default function Person({ suspect, simpleMode }: personProps) {
    const navigate = useNavigate();
    const {addSuspect} = useContext(BlackListContext)
    return (
        <S.cardContainer>
            <S.topContainer>
                <img src={suspect.picture} alt={suspect.name} />
                <h3>Information's:</h3>
            </S.topContainer>
            <S.infoContainer>
                <p>ID: {suspect._id}</p>
                <p>NAME: {suspect.name}</p>
                <p>AGE: {suspect.age}</p>
                <p>BALANCE: {suspect.balance}</p>
                <p>COMPANY: {suspect.company}</p>
                <p>EMAIL: {suspect.email}</p>
            </S.infoContainer>
                {!simpleMode && <S.buttonContainer>
                    <S.Button
                        onClick={() => { navigate(`/details/${suspect._id}`) }}
                    >
                        Details
                    </S.Button>
                    <S.Button 
                    onClick={() => addSuspect(suspect)}
                    deleted
                    >
                        Add in BlackList
                    </S.Button>
                </S.buttonContainer>}
        </S.cardContainer>
    )
}