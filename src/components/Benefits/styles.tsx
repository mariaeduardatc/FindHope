import styled from 'styled-components'


export const Container = styled.div`
    text-align: center;
    background-color: var(--white);

    color: var(--green-dark);
`

export const Title = styled.div`
    h1{
        padding: 2rem 0rem;
    }  
`

export const Benefit = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0rem 2rem;

    @media screen and (min-width: 600px) {
        padding: 0rem 15rem;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 2rem;

    img{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        margin-bottom: 1rem;
    }

    h4{
        font-size: 18px;
        font-weight: 100;
    }
`