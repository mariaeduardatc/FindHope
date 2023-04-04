import { Container, Title, Image, Clock, Register } from "./styles";
import image from '../../assets/icon.png'


export function Home(){

    return(
        <Container>
            <Title>
                <h1>
                    Virtual Mental Health Retreat
                </h1>
                <h3>
                    Learn to deal with Trauma, relationships & anxiety
                </h3>
            </Title>

            <Image>
                <img src={image} alt="" />
            </Image>

            <Clock>
                <h3>
                    The Event Starts in:
                </h3>
            </Clock>

            <Register>
                <button>Register now: $100 {" "}
                <span style={{textDecoration: 'line-through'}}>
                    $70
                </span>
                </button>
                <h3>ONLY 23 SPOTS LEFT</h3>

            </Register>

            
        </Container>
    )
}