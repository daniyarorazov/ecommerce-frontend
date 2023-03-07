import { Container } from 'react-bootstrap';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

import HomeScreen from './screens/HomeScreen.jsx';

function App() {

  return (
    <div className="App">
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
