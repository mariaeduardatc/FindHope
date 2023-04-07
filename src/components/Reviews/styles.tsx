import styled from 'styled-components'

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
    margin-bottom: 2rem;
    h1{
        padding-top: 2rem;
    }  
`
export const Review = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0rem 1rem;
    align-items: center;
    justify-content: center;

    img{
        width: 4rem;
        height: 4rem;
        border-radius: 5rem;
        margin: 2rem 0rem; 

    }
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    .participants{
        width: 2rem;
        height: 2rem;
        background-color: var(--green-light);
        border-radius: 5rem;
        margin-top: 2rem;
    }
`
export const Text = styled.div `
    display: flex;
    flex-direction: column;
    gap: 0;

    align-items: center;
    text-align: justify;

    h3{
        font-size: 16px;
    }

    h4{
        font-size: 16px;
        font-weight: 200;
        font-family: "Public Sans";
        padding: 0rem 2rem;
    }
`


