import Input from './components/Input';
import Sec from './components/Sec'
import SideBar from './components/Sidebar'
import {HashRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
  <HashRouter>
    <section className='App'>
      <SideBar/>
      <Routes>
        <Route path='/' element={<Input />}/>
        <Route path='/page2' element={<Sec />}/>
      </Routes>
    </section>
  </HashRouter>
  );
}

export default App;
