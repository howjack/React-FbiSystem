import * as S from './style'
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { GiWantedReward } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

type NavBarProps = {
    setTheme: any;
    theme: string;
}

export default function Navbar({ setTheme, theme }: NavBarProps) {
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    useEffect(() => {
        if (localStorage.theme) {
            setTheme(localStorage.getItem("theme"))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <S.Nav>
            <S.navContainer>
                <Link to={"/"}>
                    <h1>FBI System</h1>
                </Link>
                <S.iconsContainer>
                    <Link to={"/register"}>
                        <AiOutlinePlus color='white' size={35} />
                    </Link>
                    <Link to={"/blacklist"}>
                        <GiWantedReward color='white' size={35} />
                    </Link>
                </S.iconsContainer>
            </S.navContainer>
            <S.darkLightButton
                onClick={themeToggler}
                theme={theme}>
                {theme === "light" ?
                    <BsFillMoonFill color='rgb(153, 153, 153)' size={25} /> :
                    <BsFillSunFill color='rgb(153, 153, 153)' size={25} />
                }
            </S.darkLightButton>
        </S.Nav>
    )
}