
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from './store/actions/action'


const Counter = ()=>{
    const count = useSelector((state=>state.counter.count))
    const dispatch = useDispatch()

    return(
        <div >
            <h2>Count in counter: {count}</h2>
            <button 
            className='p-2 bg-gray-500'
            onClick={() => dispatch(increment())}> 
                Increment 

            </button>
            <br/>
            <button 
            className='p-2 mt-4 bg-gray-500'
            onClick={() => dispatch(decrement())}> 
                Decrement 

            </button>
            
        </div>
        
    ) 
}

export default Counter;