import { useMachine } from "@xstate/react";
import React from "react";
import { toggleLightMachine } from "../stateMachine/human";

const Light = () => {
  const [state, sendState] = useMachine(toggleLightMachine, {
  actions:{
    "entry off":()=>{
        console.log("eo")
    },
    "exit off":()=>{
        console.log("eo")
    },
    "turn off the light":()=>{
        console.log("tf")
    },

  }
  });
  return (
    <div className="">
        {state.value.toString()}
        <p>{state.context.counter}</p>

    
      <div className="w-12 h-10 bg-slate-100" onClick={() => sendState("switchDOWN")}>
        
      </div>
      <div className="w-12 h-10 bg-blue-600" onClick={() => sendState("switchUP")}></div>
    </div>
  );
};

export default Light;
