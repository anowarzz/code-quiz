import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Main from "../components/layouts/Main";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import { quizCardLoader } from "./QuizCardsLoader";

export const router = createBrowserRouter([
    {
      path:'/',
      element: <Main />,
      errorElement: <ErrorPage /> ,
      children: [
        {
          path:'/home',
          loader: quizCardLoader,
          element: <Home />,
        },
        {
          path:'/',
          loader: quizCardLoader,
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

