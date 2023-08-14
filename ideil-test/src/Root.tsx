import './App.css'
import Header from "./modules/header/header.tsx";
import MainPage from "./core/main-page/main-page.tsx";
import Footer from "./modules/footer/footer.tsx";
import GamePage from "./core/game-page/game-page.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./core/error-page/error-page.tsx";
import * as path from "path";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "matches/:teams",
        element: <GamePage/>
    },
    {
        path: "matches/:teams/:date",
        element: <GamePage/>
    }

])

function Root() {
  return (
    <>
        <Header/>
        <RouterProvider router={router} />
        <Footer />
    </>
  )
}

export default Root


