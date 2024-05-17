import styled from "styled-components";

export const ContentModalError = styled.div`
width: 30rem;
height: auto;
padding: 1.5rem;
background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;

span{
    width: 100%;
    /* background-color: red; */
    align-items: center;
    text-align: right;

    svg{
        cursor: pointer;
    }
}

h1{
    font-size: 1.5rem;
}
`