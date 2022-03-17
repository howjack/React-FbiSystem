import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #082759;
    color: white;
    box-shadow: 0px 1px 25px -5px black;
    margin-bottom: 10px;
`

export const navContainer = styled.div`
    max-width: 1280px;
    margin: auto;
    padding: 0 10px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    font-family: 'Smooch Sans', sans-serif;

    svg{
        transform: translateY(4px);
    }
`

export const iconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

type darkModeProps = {
    theme: string;
}

export const darkLightButton = styled.button<darkModeProps>`
    position: fixed;
    right: 3%;
    bottom: 5%;
    background-color: ${props => props.theme === "dark" ? "#f8f8f8" : "#252525"};
    border-radius: 50px;
    height: 50px;
    width: 50px;



    &:hover{
        opacity: 0.9;
    }
    
`
