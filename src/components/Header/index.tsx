import { Container } from "./styles";
import image from '../../assets/icon.png'


export function Header(){
    return(
        <Container>
            <img src={image} alt="findhope logo" id="logo" />

            <a href="" target={"_blank"}>
                <button id="register-button">Register</button>
            </a>
            
        </Container>
    )
}