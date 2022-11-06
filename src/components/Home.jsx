import React from 'react';
import { Outlet, Link } from 'react-router-dom'; 
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import { About } from './About';


export function Home() {
    return ( 
    <div className='container'>
        <Header></Header>
    <div>
        <Outlet></Outlet>
    </div>
        <Footer></Footer>

    </div>
)}

export default Home;



