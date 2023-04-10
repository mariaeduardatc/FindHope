import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  color: var(--green-dark)  

  

`
export const Title = styled.div`
    h1{
        padding: 2rem 0rem;
    }
`

export const Question = styled.div`

  display: flex;
  flex-direction: column;
  

  .box {
    margin-bottom: 1rem;
    background-color: var(--pink-light);
    border-radius: 1rem;
    color: var(--green-dark)
    padding: 2rem;
    border: none;
    width: 50rem;
    height: 4rem;
    align-items: center;
    justify-content: center;
  }


  h2{
    font-weight: 700;
  }

  h4{
    font-weight: 500;
    font-size: 20px;
    
  }
  `