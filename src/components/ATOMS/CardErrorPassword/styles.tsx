import styled from "styled-components";

export const ContentCardErro = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
    background-color: #e4e4e4;

    div{
        display: flex;
        gap: 0.5rem;

        .svgCheck{
            color: #ffffff;
            border-radius: 50%;
            background-color: #12b33d;
        }

        .svgX{
            color: #fff;
            border-radius: 50%;
            background-color: red;
        }

        h3{
            font-size:1rem;
        }
    }
`;