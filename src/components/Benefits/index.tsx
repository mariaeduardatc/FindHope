import { Benefit, Container, Description, Title } from "./styles";
import childtrauma  from '../../assets/Childhood trauma.png'
import breakup  from '../../assets/Breakup.png'
import burnout  from '../../assets/Burnout.png'
import selfcare from '../../assets/Self Care.png'
import panicattacks from '../../assets/Panic Attacks.png'
import toxic from '../../assets/Toxic Relationships.png'

export function Benefits(){
    return(
        <Container>
            <Title>
                <h1>Benefits</h1>
            </Title>

            <Benefit>
                <Description>
                    <img src={childtrauma} alt="" />
                    <h4>Heal childhood trauma</h4>
                </Description>
                <Description>
                    <img src={burnout} alt="" />
                    <h4>Rejuvenate after burnout</h4>
                </Description>
                <Description>
                    <img src={panicattacks} alt="" />
                    <h4>Manage Panic attacks</h4>
                </Description>
                <Description>
                    <img src={selfcare} alt="" />
                    <h4>Build a self care routine</h4>
                </Description>
                <Description>
                    <img src={toxic} alt="" />
                    <h4>Recognise & deal with toxic relationships</h4>
                </Description>
                <Description>
                    <img src={breakup} alt="" />
                    <h4>Find closure after a breakup</h4>
                </Description>
            </Benefit>
        </Container>
    )
}