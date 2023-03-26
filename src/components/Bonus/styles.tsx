import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    background-color: var(--white);

    color: var(--green-dark);
    padding: 0rem 1rem;
`

export const Title = styled.div`
    h1{
        padding-top: 2rem;
    }
`

export const Bonuses = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0rem 2rem;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 2rem 0rem;

    img{
        width: 5rem;
        height: 5rem;
        background-color: rgba(200, 219, 215, 0.7);
        border-radius: 50%;
        margin-bottom: 1rem;
    }

    h4{
        font-size: 16px;
        font-weight: 100;
    }
`