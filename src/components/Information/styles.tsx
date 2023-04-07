import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    background-color: var(--white);

    color: var(--green-dark);

    padding: 0rem 2rem;

    @media screen and (min-width: 600px){
        padding: 0rem 30rem;
    }
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
    align-items: center;

    .information{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    .box{
        display: flex;
        flex-direction: row;
        background-color: var(--green-light);
        border-radius: 0.5rem;

        width: 4rem;
        height: 4rem;
        align-items: center;
        text-align: center;

    }

    h2{
        margin-left: 2px;
        margin-right:2px;
        font-size: 19px;
        justify-content: center;
        text-align: center;

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
    padding: 0rem 2rem;

    h2{
        font-size: 20px;
        font-weight: 500;
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