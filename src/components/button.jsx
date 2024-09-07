import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../addcaed.css';

function AddCard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://crud-1-bh5h.onrender.com/carding', {
        title,
        description,
      });

      // Navigate back to the main page after adding the card
      navigate('/');
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

  return (
    <div className="add-card">
      <h2>Add a New Card</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}

export default AddCard;
