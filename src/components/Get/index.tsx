import { Gets, Container, Description, Segment, Title } from "./styles";
import check from '../../assets/check.svg' 

export function Get(){ 
    return(
        <Container>
            <Title>
                <h1>What you'll get...</h1>
                <h3>3 modules in 3 weeks</h3>
            </Title>
            <Gets>
                <Segment>
                    <h3>Relationships</h3>
                </Segment>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 1:</h4>
                    <h4>Dealing with attachment issues</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 2:</h4>
                    <h4>Ending or healing a toxic relationship</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 3:</h4>
                    <h4>Dealing with infidelity</h4>
                </Description>

                <Description>
                    <img src="" alt="" />
                    <h4 className="day">Day 4:</h4>
                    <h4>Dealing with a dysfunctional family</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" /> 
                    <h4 className="day">Day 5:</h4>
                    <h4>Getting over breakup/divorce</h4>
                </Description>
                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 6:</h4>
                    <h4>Building boundaries</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 7:</h4>
                    <h4>Build a healthy relationship</h4>
                </Description>


                <Segment>
                    <h3>Anxiety</h3>
                </Segment>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 8:</h4>
                    <h4>Finding your triggers</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 9:</h4>
                    <h4>Dealing with panic attacks</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 10:</h4>
                    <h4>Helping a partner with anxiety</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 11:</h4>
                    <h4>Identifying catastrophized thoughts</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 12:</h4>
                    <h4>Breathwork for mindfulness</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 13:</h4>
                    <h4>Yoga for anxiety & stress</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 14:</h4>
                    <h4>Finding your own yoga style</h4>
                </Description>

                <Segment>
                    <h3>Trauma</h3>
                </Segment>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 15:</h4>
                    <h4>Recognising trauma responses</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 16:</h4>
                    <h4>Dealing with childhood trauma</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 17:</h4>
                    <h4>Healing your inner child</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 18:</h4>
                    <h4>Helping a partner deal with trauma</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 19:</h4>
                    <h4>Dealing with grief</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 20:</h4>
                    <h4>Dealing with generational trauma</h4>
                </Description>

                <Description>
                    <img src={check} alt="check symbol" />
                    <h4 className="day">Day 21:</h4>
                    <h4>Creating your own self love tools</h4>
                </Description>
                
            </Gets>

        </Container>
    )
}