import Cinemas from "./Components/Cinema"
import Festivals from "./Components/Festivals"
import { ITCompanies } from "./Components/ITCompanies"
import { NavBar } from "./Components/NavBar"
import Tourism from "./Components/Tourism"
import Traditional from "./Components/Traditional"

const App = ()=>{
  return(
    <>
    
     <div className="header">
      <h1>Chennai IT Companies and Robotics</h1>
    
     </div>
       <NavBar/>
    
      <ITCompanies/>
     <div>
      <h1 style={
            {display:"flex",justifyContent:"center",alignItems:"center"
            }
         }>Kerala Festivals and Tourism</h1>
         <Festivals/>
         <Tourism/>
     </div>
     <div>
            <h1 style={
            {display:"flex",justifyContent:"center",alignItems:"center"
            }
         }>Karnataka Movies and Traditional</h1>
      <Cinemas/>
      <Traditional/>
     </div>
    </>
  )
}
export default App
