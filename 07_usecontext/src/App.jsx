import Login from "./components/login"
import Profile from "./components/Profile"
import UserContextProvider from "./contexts/userContextProvider"

function App() {

  return (
    <UserContextProvider>
      <h1>Use context</h1>
      < Login />      
      < Profile />      
    </UserContextProvider>
  )
}

export default App
