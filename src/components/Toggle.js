import React from "react";
import { useState } from "react";


function Toggle() {
  const [Cond, setCond] = useState(false)
  function Click(){
    setCond((Cond)=>!Cond)
  }
  return <button onClick={Click}  style={{ background: "red" }}>{Cond? "ON":"OFF"}</button>;
}

export default Toggle;
