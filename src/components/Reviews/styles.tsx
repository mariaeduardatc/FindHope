import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    background-color: var(--white);

    color: var(--green-dark);
    padding: 0rem 2rem;
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
`

export const Description = styled.div`
    display: flex;
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

    text-align: justify;

    h4{
        font-size: 16px;
        font-weight: 100;
    }
`

export const Stars = styled.div`
    display: flex;
    gap: 0.2rem;

    height: 2rem;
    margin-top: 3rem;
    
    img{
        height: 2rem;
    }
    
`

