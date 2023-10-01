import React from 'react';

function FoodItemCard(props) {
  return (
    <div className="card">
      <img src={props.imageSrc} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">${props.price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

function FoodItems() {
    const foodItems = [
      {
        title: 'Burger',
        description: 'Delicious burger with all the toppings',
        price: 10.99,
        imageSrc: 'src/static/images/burger.webp', // Updated path with a leading slash
      },
      {
        title: 'Pizza',
        description: 'Freshly baked pizza with your favorite toppings',
        price: 12.99,
        imageSrc: 'src/static/images/pizza.jpg', // Updated path with a leading slash
      },
      // Add more food items here
    ];
  
    return (
      <div className="container mt-4">
        <div className="row">
          {foodItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <FoodItemCard {...item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default FoodItems;
