import styled from "styled-components";

export const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    header{
        background-color: cyan;
        width: 100%;
        min-height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .artwork-detail{ 
        aspect-ratio: 4.3;
        width: 50vw;
        height: 50vh;
        background-color: aliceblue;
        margin-bottom: 20px;
    }
`

