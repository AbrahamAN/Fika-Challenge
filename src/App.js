import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardMovie from './components/CardMovie'
import CardSelected from './components/CardSelected'

function App() {
  return (
    <Container className="bg-black h-screen w-screen flex">
      <CardMovie/>
    </Container>
  );
}

export default App;
