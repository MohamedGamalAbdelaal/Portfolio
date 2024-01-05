import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
function App() {
  const router=createBrowserRouter([
    {path:'/', element:<Layout/>,children:[
      {path:'/' , element:<Home/>},
      {path:'about' , element:<About/>},
      {path:'skills' , element:<Skills/>},
      {path:'contact' , element:<Contact/>},
      {path:'portfolio', element:<Portfolio/>}

    ]},

    
  ])
  return <RouterProvider router={router}/>
}

export default App;
