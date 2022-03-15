import { participantsProps} from '../../types/suspects'
import Person from '../Person'
import * as S from './style'

export default function Participants({participants}: participantsProps) {

    return (
        <S.participantsContainer>
            <h3>Participants:</h3>
            <S.listContainer>
                {participants.map((suspect) => (
                    <Person suspect={suspect} key={suspect.name} />
                ))}
            </S.listContainer>
        </S.participantsContainer>
    )
}