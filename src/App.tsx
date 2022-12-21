import Light from "./components/Light";
import { amrMachine } from "./stateMachine/amr";
import { useMachine } from "@xstate/react";
function App() {
  const [state,send] =useMachine(amrMachine)


  return (
    <div className="App">
  <p>{state.value.toString()}</p>
  

   <button onClick={()=>send("call")}>change state</button>
    </div>
  );
}

export default App;
