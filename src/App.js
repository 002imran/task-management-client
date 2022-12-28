// import Nav from "./Pages/Shared/Nav/Nav";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div>
        {/* <h2>Welcome to Daily Task Management!</h2>
        <Nav></Nav> */}

        <RouterProvider router={router}></RouterProvider>
        
    </div>
  );
}

export default App;
