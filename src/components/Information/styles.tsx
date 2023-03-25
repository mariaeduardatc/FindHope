import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    background-color: var(--white);

    color: var(--green-dark);
`

export const Title = styled.div`
    h1{
        padding-top: 2rem;
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
        background-color: var(--green-light);
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

export const Included = styled.div`
    padding: 0rem 1rem;
    :last-child{
        padding-bottom: 2rem;
    }

`

export const Activities = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;

    h2{
        font-size: 20px;
        font-weight: 300;
    }

    h4{
        font-size: 16px;
        font-weight: 100;
    }


    img{
        width: 10rem;
        height: 10rem;
        margin-bottom: 1rem;
    }
`