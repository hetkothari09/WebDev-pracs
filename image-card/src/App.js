import React from 'react';
import ImageCard from './ImageCard';
import './App.css';

function App(){
  const imgUrl = 'https://st2.depositphotos.com/7237548/10008/i/450/depositphotos_100081176-stock-photo-footballer-cristiano-ronaldo.jpg';
  const description = 'He is a great footballer named Ronaldo. He is a GOAT';

  return(
    <div className='App'>
      <h1>Image Cards</h1>
      <ImageCard imgUrl={imgUrl} description={description} />
    </div>
  );
} 

export default App;