import { Benefits } from './components/Benefits';
import { Bonus } from './components/Bonus';
import { Clients } from './components/Clients';
import { Get } from './components/Get';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Information } from './components/Information';
import { GlobalStyle } from './styles/global';


export function App(){
    return(
        <>
        <Header />
        <Home />
        <Information />
        <Benefits />
        <Get />
        <Bonus />
        <Clients />

        <GlobalStyle />
        </>
    )
}