import styled from "styled-components"

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