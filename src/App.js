import React from 'react';
import foods from './foods.json';
import { Row } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(true);

  const handleAddFood = (newFood) => {
    setFoodList((prevFoods) => [...prevFoods, newFood]);
  };

  const handleDeleteFood = (foodName) => {
    setFoodList((prevFoods) =>
      prevFoods.filter((food) => food.name !== foodName)
    );
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFoodList(foods);
    } else {
      const filteredFoods = foods.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFoodList(filteredFoods);
    }
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      {showForm && <AddFoodForm onAddFood={handleAddFood} />} <br />
      <SearchBar onSearch={handleSearch} />
      <br />
      <br />
      <button onClick={handleToggleForm}>
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>
      <br />
      {foodList.length === 0 ? (
        <p>No food items to display</p>
      ) : (
        <Row>
          {foodList.map((food) => (
            <FoodBox
              key={food.name}
              food={food}
              onDeleteFood={handleDeleteFood}
            />
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;
