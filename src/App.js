import UserContextProvider from "./context/UserContextProvider";
import ShowUsers from "./pages/ShowUsers";

function App() {
  return (
    <div>
      <h1>REACT CONTEXT</h1>
      <UserContextProvider>
        <ShowUsers />
      </UserContextProvider>
    </div>
  );
}

export default App;
