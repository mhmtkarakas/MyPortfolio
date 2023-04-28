import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index';
import Home from './components/Home';
import About from './components/About/index';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
