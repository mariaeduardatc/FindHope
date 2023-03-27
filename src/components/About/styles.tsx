import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    background-color: var(--white);

    color: var(--green-dark);
    padding: 0rem 2rem;
    padding-bottom: 2rem;
`

export const Title = styled.div`
    h1{
        padding: 2rem 0rem;
    }
`

export const Host = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;

    img{
        background-color: var(--green-dark);
        width: 7rem;
        height: 7rem;
        border-radius: 1rem;
    }

    p{
        font-size: 16px;
        text-align: left;
    }
`