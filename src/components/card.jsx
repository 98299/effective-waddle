
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../Card.css';
import { Link, useNavigate } from 'react-router-dom';

  
  function Card({ id, title: initialTitle, description: initialDescription, link }) {
    const router = useNavigate();
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [isEditing, setIsEditing] = useState(false);
  
    useEffect(() => {
      // Initialize state with props on component mount or when props change
      setTitle(initialTitle);
      setDescription(initialDescription);
    }, [initialTitle, initialDescription]);
  
    const handleUpdate = () => {
      const updatedCard = { title, description };
  
      // Send a PUT request to update the card in the backend
      axios.put(`https://crud-1-bh5h.onrender.com/carding/${id}`, updatedCard)
        .then(response => {
          console.log('Card updated successfully:', response.data);
          router("/"); // Navigate if needed
          setIsEditing(false); // Exit edit mode
        })
        .catch(error => {
          console.error('Error updating card:', error);
        });
    };
  
     const deletehandle=async()=>{
        try{
          if (!id) {
            throw new Error('ID is missing');
          }
         await axios.delete(`https://crud-1-bh5h.onrender.com/delete/${id}`);
         window.location.reload();
        }catch(e){
           console.log(e);
        }
     }

    return (
      <div className="row">
        <div className="card col-10">
          {isEditing ? (
            <>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Edit title"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Edit description"
              />
              <button onClick={handleUpdate}>Update Card</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          ) : (
            <>
              <h3>{title}</h3>
              <p>{description}</p>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={deletehandle} >delete</button>
            </>
             
          )}
          
        </div>
        
      </div>
    );
  }
  

  


export default Card;
