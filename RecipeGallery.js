// RecipeGallery.js

import React from 'react';

const RecipeGallery = () => {
  const recipes = [
    { id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://i0.wp.com/dashofsavory.com/wp-content/uploads/2015/08/IMG_78541.jpg?fit=2000%2C1334&ssl=1"},
    { id: 2, title: "Chicken Alfredo", ingredients: ["Chicken", "Fettuccine", "Cream", "Parmesan"], image: "https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4.jpg" },
    { id: 3, title: "Vegetable Stir Fry", ingredients: ["Broccoli", "Carrots", "Bell peppers", "Onions", "Garlic", "Soy sauce", "Vegetable oil"], image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg"},
    { id: 4, title: "Margherita Pizza", ingredients: ["Pizza dough", "Tomatoes", "Fresh mozzarella", "Basil leaves", "Olive oil", "Salt", "Black pepper"], image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-500x375.jpg" }
    
  ];

  return (
    <div className="recipe-gallery" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card" style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '300px' }}>
          <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} />
          <h2 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{recipe.title}</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RecipeGallery;
