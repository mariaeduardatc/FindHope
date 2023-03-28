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

    h3{
        font-weight: 200;
    }
`
export const Gets = styled.div`
    display: flex;
    flex-direction: column;
    
`
export const Segment = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    margin-top: 2rem;
    justify-content: center;

    h3{
        font-size: 20px;
        font-weight: 400;
        text-decoration: underline;
        align-items: center;
    }

`

export const Description = styled.div`
     
    display: flex;
    gap: 0.2rem;
    margin-bottom: 0.3rem;  
    img{ 
        width: 1.5rem;
        height: 1.5rem;
    }

    h4{
        font-size: 16px;
        font-weight: 100;
        display: flex;

    }

    .day{
            font-weight: 600;
        }

    
`
