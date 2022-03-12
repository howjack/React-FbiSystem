import styled from "styled-components";

export const container = styled.div`
    margin: auto;
    max-width: 1440px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

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

export const participantsContainer = styled.div`
    margin: 5px 0;
    flex-basis: 55%;

    h3{
        font-size: 50px;
        font-weight: bold;
        text-align: center;
    }
`

export const listContainer = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    height: 85vh;
    overflow-y: scroll;
`