import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Homepage } from './Homepage';
import { Login } from './Loginpage';
function App() {
  return (
    <>
    {
      (sessionStorage.getItem("mydetails"))?
    <>
      <BrowserRouter>
      <Homepage/>
      <Routes>
        <Route/>
      </Routes>
      </BrowserRouter>
    </>
    :
    <>
    <Login/>
    </>
  }
  </>
  );
}

export default App;
