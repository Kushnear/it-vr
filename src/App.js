import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './pages/Main/Main';
import {Route, Routes} from 'react-router-dom';
import { WannaStudy } from './pages/wannaStudy/WannaStudy';
import { Contacts } from './pages/contacts/Contacts';
import { IT } from './pages/it/IT';
import { VR } from './pages/vr/VR';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/form' element={<WannaStudy />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/it' element={<IT />} />
          <Route path='/vr' element={<VR />} />
        </Routes>
      </div >
      <Footer />
    </div>
  );
}

export default App;
