import styled  from "styled-components";

export const cardContainer = styled.li`
    background-color: rgb(20, 22, 47);
    color: #f0f0f0;
    font-family: 'Smooch Sans', sans-serif;
    padding: 10px;
    min-height: 28rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    flex-basis: 22rem;
`

export const topContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
    font-weight: bold;

    img{
        width: 120px;
        margin-bottom: 10px;
        aspect-ratio: 1/1;
    }
`

export const infoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    p{
        margin: 3px 0;
        font-size: 24px;
    }
`
export const buttonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

type ButtonProps = {
    deleted?: boolean
}

export const Button = styled.button<ButtonProps>`
    padding: 2px 0;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 0px;
    font-family: 'Smooch Sans', sans-serif;
    background-color: ${props => props.deleted? "#bf4d43" : "#e8e8e8"};
    border: 0;
    padding: 8px 12px;
    border-radius: 10px;

    &:hover{
        opacity: 0.8;
    }
`