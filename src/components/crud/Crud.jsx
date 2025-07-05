import {useEffect, useState} from "react";
import Login from "./Login.jsx";
import Me from "./Me.jsx";

export default function Crud() {
  const [user, setUser] = useState("");

  useEffect(()=>{
    fetch("https://vinidb.onrender.com/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
      .then(res => {
        if(!res.ok){
          throw new Error("Error na requisição");
        }
        return res.json();
      }).then(data => {
      setUser(data);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div>
      {user? <Me user={user}/> : <Login/>}
    </div>
  )
};