import { useContext } from 'react'
import Person from '../../components/Person'
import { BlackListContext } from '../../context/BlackListContext'
import * as S from './style'

export default function BlackList() {
    const { blackList } = useContext(BlackListContext)
    return (
        <>
            <S.subTitle>Black List</S.subTitle>
            <S.listContainer>
                {blackList.map((suspect) => (
                    <Person remove suspect={suspect} key={suspect._id} />
                ))}
            </S.listContainer>
        </>
    )
}