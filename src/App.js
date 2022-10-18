import Input from './components/Input';
import Sec from './components/Sec'
import SideBar from './components/Sidebar'
import Show from './components/Show'
import {HashRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
  <HashRouter>
    <section className='App'>
      <SideBar/>
      <Routes>
        <Route path='/' element={<Input />}/>
        <Route path='/page2' element={<Sec />}/>
        <Route path='/show' element={<Show />}/>
      </Routes>
    </section>
  </HashRouter>
  );
}

export default App;
