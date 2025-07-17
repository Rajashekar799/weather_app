import React,{useState} from 'react';

function App(){
  const [city,setCity] = useState("");
  const[temp,setTemp]=useState(null)
  const SubmitHandler=(e)=>{
    e.preventDefault();
    if(city=== ""){ alert("please enter a city name")}
    fetch(`https://api.weatherapi.com/v1/current.json?key=6c1693f460f34545bba95958251707&q=${city}`)
    .then((res)=>res.json())
    
    .then((data)=>{
      setTemp("temp at "+city+" is: "+Math.round(data.current.temp_c)+"°C");
    })
  }
  return(
  <div className="abc">
    <center>
    <form onSubmit={SubmitHandler}>
      <h1>Weather App</h1>
      <input type="text" name="city" value={city} onChange={(e)=>setCity(e.target.value)}/><br/><br/>
      <input type="submit"/>
    </form>
    <h2>{temp} </h2>
    </center>
  </div>
);
}

export default App;