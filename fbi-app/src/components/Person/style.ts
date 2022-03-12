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

export const detailButton = styled.button`
    padding: 2px 0;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 0px;
    font-family: 'Smooch Sans', sans-serif;
`