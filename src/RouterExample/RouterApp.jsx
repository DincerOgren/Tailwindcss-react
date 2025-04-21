import './Router.css'
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Team from './Team';
import NotFound from './NotFound';
import CurrentLocation from './CurrentLocation';

/*
    /->Home 
    /about ->About    
*/
function App(){
    return(
        <Router>
            <div className='min-h-screen bg-gray-200'>

            <nav className='bg-blue-500 p-4'>
                <ul className='flex justify-center space-x-6'>
                    <li><Link to='/'
                    className='text-white hover:text-yellow-400 font-medium transition duration-300'>Home</Link></li>
                    <li><Link to='/about'
                    className='text-white hover:text-yellow-400 font-medium transition duration-300'>About</Link></li>
                </ul>
            </nav>

            <CurrentLocation/>
            <div className='container mx-auto py-8'>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}>
                    <Route path='team' element={<Team/>}></Route>
                </Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            </div>
            </div>
        </Router>

    )
}

export default App