import { Container, Description, Title, Review, Text } from "./styles";
import Aubree  from '../../assets/girl1.png'
import Claudia  from '../../assets/girl2.png'
import Dani  from '../../assets/girl3.png'
import Kisha from '../../assets/girl4.png'
import Gabrielle from '../../assets/girl5.png'

export function Reviews(){ 
    return(
        <Container>
            <Title>
                <h1>Listen to our costumers!</h1>
            </Title>
            <Review>
                {/* <Description>
                    <img src={Aubree} alt="" className="participants"/>
                    <Stars>  
                        <img src={rating} alt="" />
                    </Stars>
                </Description>   */}
                <Text>
                    <img src={Aubree} alt=""/>
                    <h3 class-name = "text">
                    Aubree Kozie - 28, New York City, USA
                    </h3>
                    <h4 class-name = "text">
                    The best thing happened to me this year 🤗😭</h4>
                </Text>

                {/* <Description>
                    <img src={Dani} alt="" className="participants"/>
                    <Stars> 
                        <img src={rating} alt="" />
                    </Stars>
                </Description>   */}
                <Text>
                    <img src={Dani} alt=""/>
                    <h3 class-name = "text">
                    Dani - 31, Leeds, UK
                    </h3>
                    <h4 class-name = "text">
                    I have built BOUNDARIES 🥺! Much better place to manage my anxiety 
                    & overthinking. This was really useful. Thank you very MUCH 🙏❤️</h4>
                </Text>

                {/* <Description>
                    <img src={Kisha} alt="" className="participants"/>
                    <Stars>
                        
                        <img src={rating} alt="" />
                    </Stars>
                </Description>   */}
                <Text>
                    <img src={Kisha} alt=""/>
                    <h3 class-name = "text">
                    Kisha - 25, Chicago, USA
                    </h3>
                    <h4 class-name = "text">
                    I want to thank your psychologist (Ismita).
                    Thanks for alll the positive affirmations, it helped a lotttt ❤️</h4>
                </Text>

                {/* <Description>
                    <img src={Gabrielle} alt="" className="participants"/>
                    <Stars> 
                        <img src={rating} alt="" />
                    </Stars>
                </Description>   */}

                <Text>
                    <img src={Gabrielle} alt=""/>
                    <h3 class-name = "text">
                    Gabrielle - 30, Los Angeles, USA
                    </h3>
                    <h4 class-name = "text">
                    My childhood trauma was intervening in current relationships, 
                    it was getting hard to mantain healthy relationships. 
                    The retreat helped me understand attachcement styles 
                    & inner child healing, I am able to deal with it much better now!</h4>
                </Text>

                {/* <Description>
                    <img src={Claudia} alt="" className="participants"/>
                    <Stars>                         
                        <img src={rating} alt="" />
                    </Stars>
                </Description>   */}

                <Text>
                    <img src={Claudia} alt=""/>
                    <h3 class-name = "text">
                    Claudia - 32, Los Angeles, USA
                    </h3>
                    <h4 class-name = "text">
                    Just wanted to tell that I could say no to extra work at office 
                    IN THE RIGHT WAY! Thanksssss for the session on boundaries 🥺😭</h4>
                </Text>

            </Review>

        </Container>
    )
}