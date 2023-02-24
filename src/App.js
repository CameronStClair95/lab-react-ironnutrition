import React, { useState } from 'react';
import { Button, Divider, Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

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
      {showForm ? <AddFoodForm onAddFood={handleAddFood} /> : null}
      <br/>


      <Button onClick={handleToggleForm}>
        {showForm ? 'Hide Form' : 'Show Form'}
        <br/>
      </Button>
      <br/>

      <SearchBar onSearch={handleSearch} />
      <br/>
      <br/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.length === 0 ? (
          <p>No food items to display</p>
        ) : (
          foodList.map((food) => (
            <FoodBox
              key={food.name}
              food={food}
              onDeleteFood={handleDeleteFood}
            />
          ))
        )}
      </Row>
    </div>
  );
}

export default App;
