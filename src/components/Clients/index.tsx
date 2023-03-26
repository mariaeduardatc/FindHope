import {Container, Title, List, Description } from "./styles";
import red_check from '../../assets/red_check.svg'


export function Clients(){
    return(
        <Container>
            <Title>
                <h1>Who is this for?</h1>
            </Title>

            <List>
                <Description>
                    <img src={red_check} alt="red check" />
                    <h2>If you are dealing with <u>trauma</u> issues</h2>
                </Description>

                <Description>
                    <img src={red_check} alt="red check" />
                    <h2>If you are dealing with <u>relationship</u> issues</h2>
                </Description>

                <Description>
                    <img src={red_check} alt="red check" />
                    <h2>If you are dealing with <u>anxiety</u> issues</h2>
                </Description>
            </List>
        </Container>
    )
}