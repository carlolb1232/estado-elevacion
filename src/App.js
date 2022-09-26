import './App.css';
import Wrapper from './Components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper 
        items={['something', 'sombrero', 'wholesome', 'ransom', 'apple', 'react', 'javascript']}
      />
    </div>
  );
}

export default App;
