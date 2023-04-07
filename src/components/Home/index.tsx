import { Container, General, Title, Image, Clock, Register } from "./styles";
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
                <img src="" alt="" />
            </Image>

            <Clock>
                <h3>
                    The Event Starts in: 
                </h3>
            </Clock>
            <General>  {/* TODO: put General formatting into just Clock category */}
                <div className="information" id="date">
                    <h2>1</h2>
                    <h4>Months</h4>
                </div>

                <div className="information" id="Time">
                    <h2>13</h2>
                    <h4>Days</h4>
                </div>

                <div className="information" id="Language">
                    <h2>4</h2>
                    <h4>Hours</h4>
                </div>

                <div className="information" id="Duration">
                    <h2>33</h2>
                    <h4>Minutes</h4>
                </div>
            </General>


            <Register>
                <button> Register now: $100 {" "}
                <span style={{textDecoration: 'line-through'}}>
                    $70
                </span>
                </button>
                <h3>ONLY 23 SPOTS LEFT</h3>

            </Register> 


        </Container>
    )
}