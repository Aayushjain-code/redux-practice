
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <User data={{ name: 'Aayush jain', age: 22 }} />
    </div>
  );
}

export default App;
