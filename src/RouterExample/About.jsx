
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import './Router.css'

function About(){

    const [searchParams, setSearchParams] = useSearchParams()
    const topic = searchParams.get("topic") || "general"

    const handleTopic =  (newTopic) =>{
        setSearchParams({topic:newTopic })
    }
    // same as useSearch but its pure js and needs manual handling
    // const urlParams = new URLSearchParams(window.location.search)
    // const topicFromURL = urlParams.get(topic)

    const navigate = useNavigate()
    const handleTeam=()=>{
        navigate('/about/team')
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen' >
             <h2 className='text-5xl font-bold text-center'>About</h2>

            <div className='mt-6'>
                <h3 className='text-xl text-gray-800'>Choose a topic: </h3>
                <div className='flex space-x-4 mt-4'>

                    <button
                    onClick={()=> handleTopic("Theme")}
                    className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600' >
                        Theme
                    </button>
                    <button 
                    onClick={()=> handleTopic("Mission")}
                    className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600' >
                        Mission
                    </button>
                    <button 
                    onClick={()=> handleTopic("Vision")}
                    className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600' >
                        Vision
                    </button>
                </div>
            </div>

            <div className='mt-8 text-lg text-gray-700'>
                <p>Current Topic: {topic}</p>

            </div>

            <button onClick={handleTeam} className='text-xl p-6 mt-5 text-center bg-gray-700'> Team </button>
            <div className='mt-8 w-full max-w-4xl'>
                <Outlet/>
            </div>
        </div>
    )
}

export default About