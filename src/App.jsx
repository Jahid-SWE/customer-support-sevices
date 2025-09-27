
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import { Suspense } from 'react'
import CustomerTicketManagement from './components/CustomerTicketManageMent/CustomerTicketManagement'

const fatchIssues= async()=>{
  const result = await fetch("/data.json");
  return result.json();
}


function App() {
  const fetchPromice=fatchIssues();
 

  return (
    <>
     <div>
      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* <CustomerTickets fetchPromice={fetchPromice}></CustomerTickets> */}
        <CustomerTicketManagement fetchPromice={fetchPromice}></CustomerTicketManagement>
      </Suspense>
      <Footer></Footer>
     </div>
    </>
  )
}

export default App
