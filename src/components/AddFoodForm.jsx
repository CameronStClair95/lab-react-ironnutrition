import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewFood((prevFood) => ({
      ...prevFood,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddFood(newFood);
    setNewFood({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        value={newFood.name}
        type="text"
        onChange={handleChange}
      />


      <label>Image</label>
      <Input
        name="image"
        value={newFood.image}
        type="text"
        onChange={handleChange}
      />


      <label>Calories</label>
      <br/>
      <Input
        name="calories"
        value={newFood.calories}
        type="number"
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={newFood.servings}
        type="number"
        onChange={handleChange}
      />
            <br/>
            <br/>
      <button type="submit" onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
