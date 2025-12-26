
import { BrowserRouter } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import AppRoutes from "./routes/AppRoutes"
import './App.css'

function App() {
  
  return (
    
    <BrowserRouter>
      <div className="App">
         <AppRoutes/>
      </div>
    </BrowserRouter>
  )
}

export default App
