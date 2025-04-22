import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
//import App from './RouterExample/RouterApp'
//import App from './ReduxExample/App.jsx'
import App from './ApiExample/App.jsx'
import { Provider } from 'react-redux'
//import store from './ReduxExample/store/store.js'
import store from './ApiExample/store/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
)
