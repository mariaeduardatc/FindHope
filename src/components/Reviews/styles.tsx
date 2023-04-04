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
`

export const Description = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 15%;
    margin-right: 15%;

    img{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        margin-bottom: 1rem;
    }
`
export const Text = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 2rem;

    h4{
        font-size: 16px;
        font-weight: 100;
    }
    h3{
        text-align: left;
        text-decoration: bold;
    }
`

export const Stars = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.2rem;

    width: 7rem;
    height: 2rem;
    background-color: rgba(256, 256, 256, 0.5);
    border-radius: 30%;
    margin-bottom: 0rem;
    
    img{
        width: 7rem;
        height: 2rem;
    }
    
`

