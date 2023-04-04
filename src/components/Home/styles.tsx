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
        width: 10rem;
        height: 10rem;
    }

    margin-bottom:2rem;
`

export const Clock = styled.div`

    
`

export const Register = styled.div`
    .crossed-line {
        text-decoration: line-through;
    }

    font-size: 20px;
    color: var(--green-dark);
    button{
        background-color: var(--white);
        border: none;
        border-radius: 2rem;
        width: 10rem;
        height: 2rem;

        color: var(--green-dark);
    }
    h3{
        margin-top: 1rem;
        font-size: 18px;
    }
`