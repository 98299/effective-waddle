import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CardList from './components/CardList'; // Your main component that lists the cards
import AddCard from './components/button';   // Component for adding a new card
import Footer from './components/footer';
import Update from './components/Update';


function App() {
  return (
    <Router>
      <div className="app" style={{ height:"vh"}}>
        <nav  className='hii' style={{ backgroundColor: "black", color: "white", height: "60px", width: "100vw", marginBottom: "5%", gap: "5px", padding: "2px" } }>
          <h1><i class="fa-solid fa-compass"></i> User Management Application &nbsp;   <Link to="/" style={{ color: "white" }}><i class="fa-solid fa-house"></i>Home</Link>
           <Link to="/add-card" style={{ marginLeft: "500px", textAlign: "center" }}><button class="btn btn-primary btn-lg">Submit a response</button></Link></h1>

        </nav>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/update-card" element={< Update/>} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;


