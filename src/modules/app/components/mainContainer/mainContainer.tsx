// MainContainer.tsx

import React, { useState } from 'react';
import mainStyle from './mainContainer.module.css';
import Form from '../forms/form';
import DisplayWeather from '../displayWeather/displayWeather';

export default function MainContainer() {
  const [place, setPlace] = useState('');

  const handleSearch = (newPlace: string) => {
    setPlace(newPlace);
  };

  return (
    <div className={mainStyle.mainDiv}>
      <Form onSearch={handleSearch} />
      <DisplayWeather place={place} />
    </div>
  );
}
