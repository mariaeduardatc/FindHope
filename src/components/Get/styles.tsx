import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    background-color: var(--white);

    color: var(--green-dark);
`

export const Title = styled.div`
    h1{
        padding-top: 2rem;
    }  

    h3{
        font-weight: 200;
    }
`
export const Gets = styled.div` //TODO: naming standard, this is weird here
    padding: 0rem 2rem;
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
export const Day = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 0.7rem;
    margin-right: 0.3rem;

    h4{
        font-size: 18px;
        font-weight: 100;
        text-decoration: bold;
    }

`
export const Description = styled.div`
     
    display: flex;
    flex-direction: row;
    margin-bottom: 0.3rem;
    justify-content: left;    
    align-items: center;

    img{ 
        padding: 15px;
        width: 1rem;    //TODO: these lines are not doing anything
        height: 1rem;
        background-color: rgba(60, 85, 86, 0.5);
        margin-bottom: 0rem;
        margin-left: 25%;
    }

    h4{
        font-size: 18px;
        font-weight: 100;
        display: flex;
    }
`
