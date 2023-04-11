import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  color: var(--green-dark)
  
`
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
      padding: 2rem 0rem;
    }
`

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  .box {
    height: 5rem; 
    background-color: var(--pink-light);
    align-items: left;
    justify-content: center;
    margin-left: 25%;
    margin-right: 20%;
    border-radius: 1rem;
    color: var(--green-dark) 

  }

  h3{
    font-weight: 600;
    font-size: 21px;
    padding-left: 1rem;

  }

  h4{
    font-weight: 500;
    font-size: 20px; 
    padding-left: 30%;
    padding-right: 20%; 
  }
  
  `