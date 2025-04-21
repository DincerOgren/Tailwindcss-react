import './App.css'
import DarkModeToggle from './DarkModeToggle'

function App() {

  return (
   <div className='bg-gray-100 p-4 dark:bg-gray-900 dark:text-white'>
    <DarkModeToggle/>
      <ui className='list-none md:flex md:gap-4'>
        <li className='bg-blue-400 text-white p-2 m-2 rounded-none md:px-10'>Item 1</li>
        <li className='bg-blue-400 text-white p-2 m-2 rounded-none md:px-10'>Item 2</li>
        <li className='bg-blue-400 text-white p-2 m-2 rounded-none md:px-10'>Item 3</li>
      </ui>
   </div>
  )
}

export default App
