import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    background-color: var(--white);

    color: var(--green-dark);
    padding: 0rem 1rem;

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

    img{
        width: 4rem;
        height: 4rem;
        border-radius: 5rem;
        margin-top: 2rem;  
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: row;
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
    margin-bottom: 2rem;
    gap: 0;

    text-align: justify;

    h4{
        font-size: 16px;
        font-weight: 200;
        font-family: "Public Sans";
    }
`


