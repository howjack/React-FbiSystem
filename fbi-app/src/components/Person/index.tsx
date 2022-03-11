import { personProps } from '../../types/suspects'
import * as S from './style'

export default function Person({suspect}: personProps) {
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
            <S.detailButton>Detalhes</S.detailButton>
        </S.cardContainer>
    )
}