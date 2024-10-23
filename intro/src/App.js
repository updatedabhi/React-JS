function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    const fun = () => console.log("event");
    document.addEventListener("click", fun);

    return () => {
      document.removeEventListener("click", fun);
    }
  })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => { setCount + 1 }}>increment count</button>
    </div>
  );
}

export default App;
