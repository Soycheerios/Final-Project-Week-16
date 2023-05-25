import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RestaurantList = ({ restaurants, deleteRestaurant }) => {
  return (
    <div className='ListPage'>
      <h1 className='ListHeader'>Restaurant List</h1>
      {restaurants.map((restaurant) => (
        <Card key={restaurant.id} className="mb-3">
          <Card.Body>
            <Card.Title>{restaurant.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{restaurant.cuisine}</Card.Subtitle>
            <Card.Text>Rating: {restaurant.rating}</Card.Text>
            <Link to={`/restaurants/${restaurant.id}`} className="btn btn-primary me-2">
              View Details
            </Link>
            <Link to={`/restaurants/${restaurant.id}/edit`} className="btn btn-secondary me-2">
              Edit
            </Link>
            <Button variant="danger" onClick={() => deleteRestaurant(restaurant.id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RestaurantList;
