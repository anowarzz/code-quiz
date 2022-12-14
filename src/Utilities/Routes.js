import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Main from "../components/layouts/Main";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import { quizCardLoader } from "./QuizCardsLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: quizCardLoader,
        element: <Home />,
      },
      {
        path: "/home",
        loader: quizCardLoader,
        element: <Home />,
      },
      {
        path: "/statistics",
        loader: quizCardLoader,
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "quiz/:quizId",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          );
        },
        element: <Topics />,
      },
    ],
  },
]);
