import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Bonus } from './components/Bonus';
import { Clients } from './components/Clients';
import { Footer } from './components/Footer';
import { Get } from './components/Get';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Information } from './components/Information';
import { GlobalStyle } from './styles/global';
import { Reviews } from './components/Reviews';


export function App(){
    return(
        <>
        <Header />
        <Home />
        <Information />
        <Benefits />
        <Get />
        {/* <Bonus /> */}
        <Clients />
        <Reviews />
        
        <About />
        <Footer />

        <GlobalStyle />
        </>
    )
}