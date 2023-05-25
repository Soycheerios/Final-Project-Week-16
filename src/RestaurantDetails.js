import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const RestaurantDetails = ({ restaurants }) => {
  const { id } = useParams();
  const restaurant = restaurants.find((restaurant) => restaurant.id === parseInt(id));

  if (!restaurant) {
    return <h3 className='notFound'>404 - No Restaurants Found</h3>;
  }

  return (
    <>
      <h2 className='detailHeader'>Restaurant Details</h2>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{restaurant.cuisine}</Card.Subtitle>
          <Card.Text>Rating: {restaurant.rating}</Card.Text>
          <Link to="/restaurants" className="btn btn-primary">
            Back to List
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default RestaurantDetails;
