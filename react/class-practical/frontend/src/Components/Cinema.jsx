import Action from "./Action"
import Love from "./Love"
import Mostwatched from "./Mostwatched"

export const Cinemas = ()=>{
    return(
        <>
        <div>
            <h2 style={{backgroundColor:"lightsalmon",display:"flex",justifyContent:"center",alignItems:"center",padding:"4px"}}>Movies List in Karnataka</h2>
            <Love/>
            <Action/>
            <Mostwatched/>
        </div>
        </>
    )
}
export default  Cinemas