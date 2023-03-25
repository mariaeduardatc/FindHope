import { Benefit, Container, Description, Title } from "./styles";

export function Benefits(){
    return(
        <Container>
            <Title>
                <h1>Benefits</h1>
            </Title>

            <Benefit>
                <Description>
                    <img src="" alt="" />
                    <h4>Heal childhood trauma</h4>
                </Description>
                <Description>
                    <img src="" alt="" />
                    <h4>Rejuvenate after burnout</h4>
                </Description>
                <Description>
                    <img src="" alt="" />
                    <h4>Manage Panic attacks</h4>
                </Description>
                <Description>
                    <img src="" alt="" />
                    <h4>Build a self care routine</h4>
                </Description>
                <Description>
                    <img src="" alt="" />
                    <h4>Recognise & deal with toxic relationships</h4>
                </Description>
                <Description>
                    <img src="" alt="" />
                    <h4>Find closure after a breakup</h4>
                </Description>
            </Benefit>
        </Container>
    )
}