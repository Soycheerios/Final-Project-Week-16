import React from 'react';
import Card from 'react-bootstrap/Card';

const FeaturedRestaurant = ({ restaurant }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{restaurant.cuisine}</Card.Subtitle>
        <Card.Text>Rating: {restaurant.rating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeaturedRestaurant;
