import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import RestaurantList from './RestaurantList';
import RestaurantDetails from './RestaurantDetails';
import AddRestaurant from './AddRestaurant';
import EditRestaurant from './EditRestaurant';
import Card from 'react-bootstrap/Card';
import FeaturedRestaurant from './FeaturedRestaurant';
import Footer from './Footer';


function App() {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: 'Sushi King', cuisine: 'Japanese', rating: 4.9 },
    { id: 2, name: 'Taco Lovers', cuisine: 'Mexican', rating: 4.2 },
    { id: 3, name: 'Pizza Pizza', cuisine: 'Italian', rating: 4.3 },
    { id: 4, name: 'French Bistro', cuisine: 'French', rating: 4.5 },
  ]);

  const addRestaurant = (restaurant) => {
    const newRestaurant = { id: Date.now(), ...restaurant };
    setRestaurants([...restaurants, newRestaurant]);
  };

  const deleteRestaurant = (id) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  const updateRestaurant = (id, updatedRestaurant) => {
    setRestaurants(
      restaurants.map((restaurant) => (restaurant.id === id ? updatedRestaurant : restaurant))
    );
  };

  return (
    <Router>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Restaurant Review App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/restaurants">
                Restaurants
              </Nav.Link>
              <Nav.Link as={Link} to="/restaurants/add">
                Add Restaurant
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='HomeHeader'>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<h2 className='HomeHeader'><b>Welcome to Restaurant Review App!</b></h2>} />
          <Route
            path="/restaurants"
            element={<RestaurantList restaurants={restaurants} deleteRestaurant={deleteRestaurant} />}
          />
          <Route
            path="/restaurants/add"
            element={<AddRestaurant addRestaurant={addRestaurant} />}
          />
          <Route
            path="/restaurants/:id"
            element={<RestaurantDetails restaurants={restaurants} />}
          />
          <Route
            path="/restaurants/:id/edit"
            element={<EditRestaurant restaurants={restaurants} updateRestaurant={updateRestaurant} />}
          />
        </Routes>
      </Container>
      </div>
      <Container>
      <Card>
        <div className='imgOne'></div>
          <Card.Body>
            <h3 className='imgOneHeader'><b>Most Popular Now! </b></h3>
          </Card.Body>
          <FeaturedRestaurant restaurant={restaurants[0]} />

      </Card>
      <Card>
        <div className='imgTwo'></div>
          <Card.Body>
            <h3 className='imgTwoHeader'><b>Let Us Know Your Favorite Restaurants On Our App!</b></h3>
          </Card.Body>
      </Card>
      <Card>
        <div className='imgThree'></div>
        <Card.Body>
            <h3 className='imgThreeHeader'><b>Hundreds Of Restaurants Are Waiting!</b></h3>
          </Card.Body>
      </Card>
    </Container>
    <Footer />
    </Router>

  );
}


export default App;


