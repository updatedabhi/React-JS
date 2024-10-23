// Netlify Link: https://genuine-fox-ac7dd8.netlify.app/

import React, { useState, useEffect } from 'react';

const App = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();

      async function createPokemon(x) {
        for (const item of x) {
          const res = await fetch(item.url);
          const result = await res.json();
          setAllPokemon((prev) => [...prev, result]);
        }
      }

      createPokemon(data.results);
    };

    fetchData();
  }, []);

  const handleButtonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseDialog = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className='container'>
      <h1>Pokemon Kingdom</h1>
      <div>
        <div className='container row'>
          {allPokemon.map((item, index) => (
            <div key={index} className="card" style={{ position: 'relative', width: '18rem', margin: '10px' }}>
              <img src={item.sprites.front_default} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <button onClick={() => handleButtonClick(item)} className='btn btn-primary'>No more</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPokemon && (
        <div className="modal" style={{ display: 'block', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog" style={{height:'400px', width:'400px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedPokemon.name}</h5>
                <button type="button" className="close" onClick={handleCloseDialog}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} style={{ maxWidth: '100%' }} />
                {/* Display other information about the selected Pokemon */}
                <p>{/* Add relevant information here */}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseDialog}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
