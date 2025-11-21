import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Protected from './pages/Protected';
import Logout from './pages/Logout';


function App() {
  const [page,setPage] = useState("login")
  const handleLogoutState = () => {
    setPage("login");
  };
  return (
    <div className="flex justify-center gap-4 mt-4">
      <div className="">
        <button
          onClick={() => setPage("login")}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Login
        </button>
        <button
          onClick={() => setPage("register")}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Register
        </button>
        <button
          onClick={() => setPage("protected")}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Protected
        </button>
        <button
          onClick={() => setPage("logout")}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Logout
        </button>
      </div>
      {page === "login" && <Login />}
      {page === "register" && <Register />}
      {page === "protected" && <Protected />}
      {page === "logout" && <Logout onLogout={handleLogoutState} />}
    </div>
  );
}

export default App
