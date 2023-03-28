import { Container, Description, Title, Review, Stars, Text } from "./styles";
import image from '../../assets/icon.png'
import check from '../../assets/check.svg'

export function Reviews(){ 
    return(
        <Container>
            <Title>
                <h1>Listen to our costumers!</h1>
            </Title>
            <Review>
                <Description>
                    <img src={image} alt="" />
                    <Stars>   {/* TODO: make this a subclass */}
                        
                        <img src={check} alt="" />
                        <img src={check} alt="" />
                        <img src={check} alt="" />
                    </Stars>
                </Description>  
                <Text>
                    <h3 class-name = "text">
                        Paul McCartney
                    </h3>
                    <h4 class-name = "text">
                    <br></br>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.”</h4>
                </Text>

                <Description>
                    <img src={image} alt="" />
                    <Stars>   {/* TODO: make this a subclass */}
                        
                        <img src={check} alt="" />
                        <img src={check} alt="" />
                        <img src={check} alt="" />
                    </Stars>
                </Description>  
                <Text>
                    <h3 class-name = "text">
                        Paul McCartney
                    </h3>
                    <h4 class-name = "text">
                    <br></br>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.”</h4>
                </Text>

                <Description>
                    <img src={image} alt="" />
                    <Stars>   {/* TODO: make this a subclass */}
                        
                        <img src={check} alt="" />
                        <img src={check} alt="" />
                        <img src={check} alt="" />
                    </Stars>
                </Description>  
                <Text>
                    <h3 class-name = "text">
                        Paul McCartney
                    </h3>
                    <h4 class-name = "text">
                    <br></br>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.”</h4>
                </Text>

            </Review>

        </Container>
    )
}