// import useState from 'react'
// import { useEffect } from 'react';
// import LocalStorage from './components/LocalStorage';
import Ref from './components/Ref';
function App() {
  // const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // const formattedTime = currentTime.toLocaleTimeString();
  return (
    <div>
      {/* <h1>Abhishek is good</h1>
      <h1>{formattedTime}</h1> */}
      {/* <LocalStorage/> */}
      <Ref />
    </div>
  );
}

export default App;
