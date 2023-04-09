import React, { useEffect, useState } from 'react'

const Activity = () => {
const [clore, newClore] = useState(["Bathroom", "Living Room", "Kitchen + Toilet"])
const [i, setI] = useState(0);

useEffect(() => {

  function moveClore(){
    if(i == 0) {
        newClore(["Bathroom", "Living Room", "Kitchen + Toilet"]);
        setI(i + 1);
    }else if(i == 1) {
        newClore(["Living Room", "Kitchen + Toilet","Bathroom"]);
        setI(i + 1);
    }else if( i == 2 ){
        newClore(["Kitchen + Toilet","Bathroom","Living Room"]);
        setI(0);
    }
  }

    const now = new Date();
    const currentDay = now.getDay(); 
    const nextMonday = new Date(now); 
    nextMonday.setDate(now.getDate() + (7 - currentDay + 1) % 7); 
    nextMonday.setHours(12); 
    nextMonday.setMinutes(0);
    nextMonday.setSeconds(0);
    const timeRemaining = nextMonday.getTime() - now.getTime(); 
    
    const interValid = setInterval(() => {
        if(new Date().getDay() === 1){
            moveClore()
        }
    }, timeRemaining);

  return () => {
    clearInterval(interValid);
  }
},[i])

  return (
    <div>
        <h1>{clore[0]}</h1>
        <h1>{clore[1]}</h1>
        <h1>{clore[2]}</h1>
    </div>
  )
}

export default Activity