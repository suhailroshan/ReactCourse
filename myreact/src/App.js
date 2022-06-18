import FirstPage from "./Components/FirstAssignment";
import StateVariables from "./Components/Assignmentone";
import Lifecycle from "./Components/Lifecycle";
import ConditionalRendering from "./Components/ConditionalRendering";

function App() {
  return (
    <div
      className="App"
      style={{
        marginLeft: 500,
        marginTop: 50,
       
        padding:10,
        width:400,
        textAlign:"left"
      }}
    >
      <ConditionalRendering />
    </div>
  );
}

export default App;
