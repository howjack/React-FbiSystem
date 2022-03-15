import { ProfileProps } from '../../types/suspects'
import * as S from './style'

export default function ProfileCard({ person }: ProfileProps) {

    return (
        <S.profileContainer>
            <S.topContainer>
                <img src={person.picture} alt="asd" />
                <h3>{person.name}</h3>
            </S.topContainer>
            <S.infoContainer>
                <p><span>ID:</span> {person._id}</p>
                <p><span>AGE:</span> {person.age}</p>
                <p><span>GENDER:</span> {person.gender}</p>
                <p><span>EYE COLOR:</span> {person.eyeColor}</p>
                <p><span>BALANCE:</span> {person.balance}</p>
                <p><span>COMPANY:</span> {person.company}</p>
                <p><span>EMAIL:</span> {person.email}</p>
                <p><span>PHONE:</span> {person.phone}</p>
                <p><span>REGISTERED:</span> {person.registered}</p>
                <p><span>ABOUT:</span> {person.about}</p>
                <p><span>ADDRESS:</span> {person.address}</p>
                <p><span>LONGITUDE:</span> {person.longitude}</p>
                <p><span>LATITUDE:</span> {person.latitude}</p>
            </S.infoContainer>
        </S.profileContainer>
    )
}