import { Container, Title, Image, Clock } from "./styles";
import image from '../../assets/icon.jpeg'


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

            
        </Container>
    )
}