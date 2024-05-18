import "./style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from './pages/Books'
import Update from './pages/Update'
import Add from './pages/Add'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Books />
  },
  {
    path: '/update/:id',
    element: <Update />
  },
  {
    path: '/add',
    element: <Add />
  }
])

function App() {
  return <div className="app">
    <div className="container">
      <RouterProvider router={router} />
    </div>
  </div>;
}

export default App;
