import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Homepage } from './Homepage';
import { Login } from './Loginpage';
import { ViewSlips } from './Slips';
import { NewPaySlip } from './NewSlip';
import { Profile } from './ProfileUpdate';
function App() {
  return (
    <>
    {(sessionStorage.getItem("user"))?
    <>
      <BrowserRouter>
      <Homepage/>
      <Routes>
        <Route path='view' exact element={<ViewSlips/>} />
        <Route path='newslip' exact element={<NewPaySlip/>}/>
        <Route path='update' exact element={<Profile/>}/>
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
