import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  height: auto;

  header {
    background-color: cyan;
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .artwork-detail {
    display: block;
    aspect-ratio: 4.3;
    width: 50vw;
    height: 50vh;
    background-color: tomato;
    margin-bottom: 20px;
  }

  @media (max-width: 360px) {
    header {
      width: 100vw;
      height: 50vh;
    }

    .artwork-detail {
      aspect-ratio: 2.1;
      /* max-width: 100vw; */
      width: 100vw;
    /* height: 100%; */
      margin-bottom: 20px;
      :hover{
        background-color: #903322;
        cursor: pointer;
      }
    }
  }
`;
