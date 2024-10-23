import React from 'react';

function LocalStorage() {
  localStorage.setItem('name', 'Abhishek');

  const handleClick = () => {
    localStorage.removeItem('name');
    window.location.reload();
  };

  return (
    <div>
      {localStorage.getItem('name') && <h1>{localStorage.getItem('name')}</h1>}
      <button onClick={handleClick}>Remove</button>
    </div>
  );
}

export default LocalStorage;
