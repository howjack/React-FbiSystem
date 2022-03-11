import * as S from './style'
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <S.Nav>
            <S.navContainer>
                <Link to={"/"}>
                    <h1>FBI System</h1>
                </Link>

                <Link to={"/register"}>
                    <AiOutlinePlus color='white' size={35} />
                </Link>
            </S.navContainer>
        </S.Nav>
    )
}