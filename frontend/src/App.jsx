import './index.css';
import {Routes,Route} from 'react-router-dom'
import { Signup } from './components/Signup';
import { Home } from './components/Home';
import { Login } from './components/Login';

function App() {
 return <>
    <Routes >
        <Route path='/' element={<Home/>}>
        <Route path="register" element={<Signup/>}/>
        <Route path="login" element={<Login/>}/>
        </Route>
    </Routes>
 </>
}

export default App
