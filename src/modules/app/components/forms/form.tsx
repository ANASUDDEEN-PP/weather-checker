import React, { ChangeEvent, useState } from 'react';
import formStyle from './form.module.css';
import getData from '@/utils/getData'; // Adjust the import path as needed

interface FormProps {
  onSearch: (place: string) => void;
}

const Form: React.FC<FormProps> = ({ onSearch }) => {
  const [place, setPlace] = useState('');

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPlace(event.target.value);
  };

  const searchHandler = () => {
    onSearch(place);
  };

  return (
    <div className={formStyle.mainContainer}>
      <form>
        <h1 className={formStyle.formHead}>Weather Checker</h1>
        <input
          type="text"
          placeholder="Enter City..."
          name="city"
          value={place}
          className={formStyle.inputFeild}
          onChange={inputHandler}
        />
        <button
          type="button"
          className={formStyle.submitButton}
          onClick={searchHandler}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;