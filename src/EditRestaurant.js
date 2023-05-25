import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditRestaurant = ({ restaurants, updateRestaurant }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    const restaurant = restaurants.find((restaurant) => restaurant.id === parseInt(id));
    if (restaurant) {
      setName(restaurant.name);
      setCuisine(restaurant.cuisine);
      setRating(restaurant.rating);
    }
  }, [restaurants, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRestaurant = {
      id: parseInt(id),
      name,
      cuisine,
      rating,
    };
    updateRestaurant(parseInt(id), updatedRestaurant);
    navigate('/restaurants');
  };

  return (
    <div>
      <h2>Edit Restaurant</h2>
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
        <button type="submit">Update Restaurant</button>
      </form>
    </div>
  );
};

export default EditRestaurant;


