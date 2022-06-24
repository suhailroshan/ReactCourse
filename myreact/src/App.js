import FirstPage from "./Components/FirstAssignment";
import StateVariables from "./Components/Assignmentone";
import Lifecycle from "./Components/Lifecycle";
import ConditionalRendering from "./Components/ConditionalRendering";
import Fetcher from "./Fetcher";
import Login from "./Login";
import Timer from "./Components/Timer";
import Functional from "./FunctionalComponents";
import UserList from "./Components/Sample"
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
      <UserList />
    </div>
  );
}

export default App;
