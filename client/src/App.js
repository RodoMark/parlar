import './App.scss';
import Navigation from './components/Navigation';
import Button from './components/buttons/Button';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <h1>PARLAR</h1>
      <Button danger></Button>
    </div>
  );
}

export default App;
