import styled from "styled-components"


export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: var(--pink-light);

    height: 4rem;

    #logo{
        margin-left: 2rem;
        height: 2rem;
        width: 2rem;
    }

    #register-button{
        margin-left: auto;
        margin-right: 2rem;

        background-color: var(--orange);
        border-radius: 1.5rem;
        border: none;
        color: var(--white);

        padding: 0.3rem 2rem;
    }

`