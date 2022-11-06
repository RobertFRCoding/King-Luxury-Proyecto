import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from "react-query"
import { Home } from './components/Home';
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";
import { Cars } from "./components/Services/Cars";
import { Villas } from './components/Services/Villas';
import { Yatchs } from './components/Services/Yatchs';
import { Transfers } from './components/Services/Transfers';
import { Chef } from "./components/Services/Chef";
import { Jets } from "./components/Services/Jets";
import { Events } from "./components/Services/Events";
import { Activities } from "./components/Services/Activities";
import { Wellness } from "./components/Services/Wellness";
import { Concierge } from "./components/Concierge";
import { About } from "./components/About";
import { Location } from "./components/Location";
import { FAQ } from "./components/FAQ";
import { TermsConditions } from "./components/TermsConditions";
import { Newsletter } from "./components/Newsletter";
import { Enquires } from "./components/Enquires";
import { VillasCards } from './components/VillasCards';
import { Collaborate } from "./components/Collaborate";
import { Body } from './components/Body';
import { Accordion } from "./components/Accordion";
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            <Route index element={<Body/>}></Route>
            <Route path="Services" element={<Services></Services>}></Route>
            <Route path="Cars" element={<Cars></Cars>}></Route>
            <Route path="Villas" element={<Villas></Villas>}></Route>
            <Route path="Yatchs" element={<Yatchs></Yatchs>}></Route>
            <Route path="Chef" element={<Chef></Chef>}></Route>
            <Route path="Transfers" element={<Transfers></Transfers>}></Route>
            <Route path="Jets" element={<Jets></Jets>}></Route>
            <Route path="Events" element={<Events></Events>}></Route>
            <Route path="Activities" element={<Activities></Activities>}></Route>
            <Route path="Wellness" element={<Wellness></Wellness>}></Route>
            <Route path="Concierge" element={<Concierge></Concierge>}></Route>
            <Route path="About" element={<About></About>}></Route>
            <Route path="Contact" element={<Contact></Contact>}></Route>
            <Route path="Location" element={<Location></Location>}></Route>
            <Route path="FAQ" element={<FAQ></FAQ>}></Route>
            <Route path="TermsConditions" element={<TermsConditions></TermsConditions>}></Route>
            <Route path="Newsletter" element={<Newsletter></Newsletter>}></Route>
            <Route path="Collaborate" element={<Collaborate></Collaborate>}></Route>
            <Route path="Enquires" element={<Enquires></Enquires>}></Route>
            <Route path="VillasCards" element={<VillasCards></VillasCards>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)

