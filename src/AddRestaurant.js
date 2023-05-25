import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const AddRestaurant = ({ addRestaurant }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = {
      name,
      cuisine,
      rating,
    };
    addRestaurant(newRestaurant);
    navigate('/restaurants');
  };

  return (
    <Card>
    <div className='addFunction'>
      <Card.Header><h1 className='addRestaurant'>Add Restaurants</h1></Card.Header>
      <Card.Body>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Cuisine:</label>
          <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} required />
        </div>
        <div>
          <label>Rating:</label>
          <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} required />
        </div>
        <button type="submit">Add Restaurant</button>
      </form>
      </Card.Body>
    </div>
    </Card>
  );
};

export default AddRestaurant;

