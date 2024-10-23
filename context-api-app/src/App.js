import React from 'react';
import Comp1 from './components/Comp1'

const FirstName = React.createContext();
function App() {
  return (
    <div>
      <FirstName.Provider value={"Abhisehk"}>
        <Comp1/>
      </FirstName.Provider>
    </div>
  );
}

export default {FirstName};
