// RecipeGallery.js

import React from 'react';

const RecipeGallery = () => {
  const recipes = [
    { id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg" },
    { id: 2, title: "Chicken Alfredo", ingredients: ["Chicken", "Fettuccine", "Cream", "Parmesan"], image: "https://example.com/alfredo.jpg" },
    // Add more recipes as needed
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
