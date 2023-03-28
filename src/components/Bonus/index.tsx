import {Container, Description, Title, Bonuses } from "./styles";

export function Bonus(){
    return(
        <Container>
            <Title>
                <h1>Bonus Package worth $100</h1>
            </Title>

            <Bonuses>
                <Description>
                    <img src="" alt="" />
                    <h4>20 minute personal session</h4>
                </Description>

                <Description>
                    <img src="" alt="" />
                    <h4>Career counseling session</h4>
                </Description>

                <Description>
                    <img src="" alt="" />
                    <h4>2 month online yoga subscription</h4>
                </Description>

                <Description>
                    <img src="" alt="" />
                    <h4>Sound bath meditation</h4>
                </Description>
            </Bonuses>
        </Container>
    )
}