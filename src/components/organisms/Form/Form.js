import React, { useState, useContext } from 'react';
import { TodoContext } from '../../../providers/TodoProvider';
import { Button } from '../../atoms/Button/Button';
import FormField from '../../molecules/FormField/FormField';
import { ViewWrapper } from '../../molecules/ViewWrapper/ViewWrapper';

const initialFormValues = {
  title: '',
  description: '',
};

const Form = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const { handleTodoAdd } = useContext(TodoContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleTodoAdd(formValues);
    setFormValues(initialFormValues);
  };

  return (
    <ViewWrapper as="form" onSubmit={handleFormSubmit}>
      <FormField
        name="title"
        id="title"
        label="Title"
        value={formValues.title}
        onChange={handleInputChange}
        required
      />
      <FormField
        as="textarea"
        name="description"
        id="description"
        label="Description"
        value={formValues.description}
        onChange={handleInputChange}
        required
      />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default Form;
