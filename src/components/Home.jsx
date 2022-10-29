import { Header } from './Header';
import { Carrusel } from './Carrusel';
import { Footer } from './Footer';


export function Home() {
    return <div className='container'>
    <Header></Header>
    <Carrusel></Carrusel>
    <Footer></Footer>
    </div>
}
