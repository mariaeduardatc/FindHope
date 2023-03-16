import { Container } from "./styles";


export function Header(){
    return(
        <Container>
            <img src="logo" alt="findhope logo" id="logo" />

            <a href="" target={"_blank"}>
                <button id="register-button">Register</button>
            </a>
            
        </Container>
    )
}