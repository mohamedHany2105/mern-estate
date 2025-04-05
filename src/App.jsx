import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import SignIn from "../src/pages/SignIn"
import SignUp from "../src/pages/SignUp"
import Profile from "../src/pages/Profile"
function App() {

  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/sign-in" element={<SignIn/>}/>
<Route path="/sign-in" element={<SignUp/>}/>
<Route path="/profile" element={<Profile/>}/>
</Routes>


</BrowserRouter> 
  )
}

export default App
