import './App.css';
import Header from './componets/Header'
import CompA from './componets/CompA'
import CompB from './componets/CompB'
import CompC from './componets/CompC'
import Error from './componets/Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div className="App">    
       <BrowserRouter>
        <Header/>
          <Routes>
              <Route path="/" element={<CompA/>}> </Route>
              <Route path="/best-center" element={<CompB/>}></Route> 
              <Route path="/reach-us" element={<CompC/>}></Route>
              <Route path="*" element={<Error/>}></Route>          
          </Routes>
       </BrowserRouter>
    </div>
  )
}
export default App