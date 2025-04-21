import { useNavigate } from 'react-router-dom'
import './Router.css'

function Team(){

    const navigate = useNavigate()
    const handleHome= ()=>{
        navigate('/')
    }
    
    return(
        <div className='text-center'>

        <h2 className="text-5xl font-bold text-center">Team page</h2>
        <p className='mt-5 text-xl text-center'> This is team example.</p>
        <button onClick={handleHome} className='text-xl p-6 mt-5 text-center bg-gray-700'> Home Page </button>
        </div>
    ) 
}

export default Team