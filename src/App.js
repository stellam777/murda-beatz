import './App.scss';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Releases from './components/Releases';
import Tours from './components/Tours';
import Store from './components/Store';
import Photos from './components/Photos';
import Videos from './components/Videos';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <Releases />
      <Tours />
      <Videos />
      <Store />
      <Photos />
    </div>
  );
}

export default App;
