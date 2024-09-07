import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../components/card";



import '../App.css';


function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);  // Add loading state
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from the server
    axios.get('https://crud-1-bh5h.onrender.com/projects') // Adjust the URL based on your server
    .then(response => {
      setCards(response.data);
      setLoading(false);  // Stop loading after data is fetched
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);  // Stop loading in case of error
    });
}, []);

  // Filter cards based on the search term
  
  
 


  return (
    <div className="app">
    {/* Show spinner while loading */}
    {loading ? (
        <div className="spinner">
          <img src="/image.gif" alt="Loading..." /> {/* Replace with your spinner */}
        </div>
      ) : (
      <div className="card-container">
        {cards.length > 0 ? (
          cards.map(card => (
            <Card key={card._id} id={card._id} title={card.title} description={card.description} link={card.link}  />
           
          ))
        ) : (
          <p>No cards found</p>
        )}
      </div>
      )}
    </div>
  );
}

export default App;