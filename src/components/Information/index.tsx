import { Container, Title, General, Included, Activities } from "./styles";
import activity  from '../../assets/1.png'
import support  from '../../assets/2.png'
//import gifts  from '../../assets/3.png'
import transform from '../../assets/4.png'
import psychologists from '../../assets/5.png'

export function Information(){
    return(
        <Container>
            <Title>
                <h1>General Information</h1>
            </Title>
            
            <General>
                <div className="information" id="date">
                    <h2>13</h2>
                    <h4>Date</h4>
                </div>

                <div className="information" id="Time">
                    <h2>13</h2>
                    <h4>Time</h4>
                </div>

                <div className="information" id="Language">
                    <h2>EN</h2>
                    <h4>Language</h4>
                </div>

                <div className="information" id="Duration">
                    <h2>EN</h2>
                    <h4>Duration</h4>
                </div>
            </General>

            <Included>
                <Title>
                    <h1>What’s included?</h1>
                </Title>

                <Activities>
                    <img src={psychologists} alt="" />
                    <h2>Live sessions lead by psychologists</h2>
                    <h4>‘Unwind after a daily hustle & build coping skills with engaging activities & a supportive community’</h4>
                </Activities>

                <Activities>
                    <img src={transform} alt="" />
                    <h2>Holistic Transformation</h2>
                    <h4>‘Transform key areas of your life -  thoughts, relationships, sleep & movement through therapy techniques & yoga’</h4>
                </Activities>

                <Activities>
                    <img src={activity} alt="" />
                    <h2>Engaging activities</h2>
                    <h4>Practice activities with psychologist/yoga guru in live & ask queries’</h4>
                </Activities>

                <Activities>
                    <img src={support} alt="" />
                    <h2>Find your support system</h2>
                    <h4>‘Everyday meet with like minded people from across the world growing with you, ready to support & motivate you’</h4>
                </Activities>
                
            </Included>

        </Container>
    )
}