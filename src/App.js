import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/layouts/Main';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';


const router = createBrowserRouter([
{
  path:'/',
  element: <Main />,
  children: [
    {
      path:'/home',
      element: <Home />,
    },
    {
      path:'/',
      element: <Home />,
    },
    {
      path:'/topics',
      element: <Topics />,
    },
    {
      path:'/statistics',
      element: <Statistics />,
    },
    {
      path:'/blog',
      element: <Blog />,
    },
  ]
},


])


function App() {
  return (
    <div >
   <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
