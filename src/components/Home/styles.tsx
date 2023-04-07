import styled from "styled-components";

export const Container = styled.div`

    background-color: rgba(245, 212, 195, 0.7);

    color: var(--green-dark);

    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    height: 45rem;

    h3{
        font-weight: 300;
    }
`

export const Title = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
`



export const Image = styled.div`
    img{
        background-color: var(--green-dark);
        width: 10rem;
        height: 10rem;
        border-radius: 1rem;
    }

    margin-bottom:2rem;
`

export const Clock = styled.div`
   
`

export const Register = styled.div`
    font-size: 20px;
    color: var(--green-dark);
    button{
        background-color: var(--white);
        border: none;
        border-radius: 2rem;
        width: 10rem;
        height: 3rem;

        color: var(--green-dark);
        margin-top: 1rem;
    }
    h3{
        margin-top: 1rem;
        font-size: 20px;
    }
`

export const General = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;

    .information{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2{
        background-color: var(--white);
        border-radius: 0.5rem;

        width: 3rem;
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    h4{
        font-weight: 100;
        font-size: 16px;
    }
`