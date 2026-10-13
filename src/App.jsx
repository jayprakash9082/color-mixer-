import { useState } from "react"

const App = () => {
  const [r,setR]=useState(0);
  const [g,setG]=useState(0);
  const [b,setB]=useState(0);

  const save=()=>{
    console.log("saved");

    localStorage.setItem("color",JSON.stringify({r,g,b}))

  }

  return (
    <div>
      <h1>Color Mixer</h1>
      <div style={{backgroundColor:'rgb('+r+','+g+','+b+')', height:"200px" ,width:"200px"}}>

      </div>
      <label htmlFor="">Red</label>
     <input type="range"
     value={r}
     onChange={(e) =>setR(e.target.value)} min={0} max={255} />
     <br />
     <br />
     <label htmlFor="">Green</label>
     <input type="range" 
      value={g}
      onChange={(e) =>setG(e.target.value)} min={0} max={255} />
     <br />
     <br />
     <label htmlFor="">Blue</label>
     <input type="range"
      value={b} 
      onChange={(e) =>setB(e.target.value)} min={0} max={255} />
      <br />
     <br />
      <button onClick={save}>Save color combination</button>
    </div>
  )
}

export default App