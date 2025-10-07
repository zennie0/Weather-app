import * as React from 'react';
import './App.css'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function SearchBox({updateInfo}) {
    let [city,setCity]= useState("");
    let [error,setError]= useState(false);
    

    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="5f8718e2af318b0c57954f367b749ce3"

    let getWeatherInfo = async()=>{
    try{
 let response=   await fetch(`${API_URL}?q=${city}&limit=5&appid=${API_KEY}&units=metric`);
     let jsonresponse = await response.json();
    
     let result ={
        city:city,
        temp:jsonresponse.main.temp,
        tempMin:jsonresponse.main.temp_min,
        tempMax:jsonresponse.main.temp_max,
        humidity:jsonresponse.main.humidity,
        feelsLike:jsonresponse.main.feels_like,
        weatherdes:jsonresponse.weather[0].description,



     }
     console.log(result);
      return result;
    }catch(err){
        throw err;
        

    }
    }
   

    let handleSubmit = async(e)=>{
       try{
         e.preventDefault();
        console.log(city);
        setCity("");
    let newinfo =  await  getWeatherInfo();
    updateInfo(newinfo);
       }catch(err){
      setError(true);
       }
    }

    React.useEffect(()=>{
        if(error){
            const timer = setTimeout(()=>{
                setError(false);
            },3000);
            return()=> clearTimeout(timer);
        }
    },[error])
    return (
         <div className='searchbox'>
    
        <form onSubmit={handleSubmit}>
        
        <br />
      <TextField id="city" label="City name" variant="outlined" required value={city} onChange={(e)=>{setCity(e.target.value);}}/>
      <br />
      
     <Button variant="outlined" type="submit" >search</Button>
</form>
{error && <p >No such place exist</p>}
    
    </div> );
}

export default SearchBox;
