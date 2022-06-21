import './App.css';
import React from 'react';


const App = () => {
  return (
    <div className='App'>
      <form className='form'>
        <input className='form__input' placeholder='name' type={'text'} />
        <input className='form__input' placeholder='email' type={'email'} />
        <input className='form__input' placeholder='phone' type={'number'} />
        <button className='form__btn'>Send</button>
      </form>

    </div>
  );
}

export default App;

// sfc - макет компоненты
// imr - import React from 'react';