import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index';
import Home from './components/Home';
import About from './components/About/index';
import Contact from './components/Contact';
import Projects from './components/Projectss/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects' element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
