import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    background-color: var(--white);

    color: var(--green-dark);
    padding: 0rem 1rem;

    @media screen and (min-width: 600px){
        padding: 0rem 30rem;
    }
`

export const Title = styled.div`
    h1{
        padding: 2rem 0rem;
    }
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0rem 2rem;
`

export const Description = styled.div`
    display: flex;
    gap: 1rem;
    padding-bottom: 1rem;
    h2{
        font-size: 20px;
        text-align: start;
        font-weight: 400;
    }
    img{
        width: 2rem;
        height: 2rem;
    }
`