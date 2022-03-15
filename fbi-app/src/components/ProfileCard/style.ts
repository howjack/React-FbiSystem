import styled from "styled-components"

export const profileContainer = styled.div`
    background-color: #e0e0e0;
    padding: 10px;
    min-height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 5px 2px;
    flex-basis: 30%;
`

export const topContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 225px;

    img{
        width: 200px;
    }

    h3{
        margin: 3px 0;
        font-size: 40px;
        text-align: center;
        font-weight: bold;
    }
`

export const infoContainer = styled.div`
    font-size: 24px;

    p{
        margin: 6px 0;
    }

    span{
        font-weight: 500;
    }
`