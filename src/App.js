import Input from './components/Input';
import Sec from './components/Sec'
import SideBar from './components/Sidebar'
import Show from './components/Show'
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'


function App() {
  return (
  <HashRouter>
    <section className='App'>
      <SideBar/>
      <Routes>
        <Route path='/' element={<Input />}/>
        <Route path='/page1' element={<Input />}/>
        <Route path='/page2' element={<Sec />}/>
        <Route path='/page1/show' element={<Show />}/>
        <Route path='/page2/show' element={<Show />}/>
        <Route path='*' element={<Navigate to='/' replace />}/>
      </Routes>
    </section>
  </HashRouter>
  );
}

export default App;
