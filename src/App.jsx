import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Layout from "./Component/Layout/Layout"
import Home from "./Component/Home/Home"
import Navbar from "./Component/Navbar/Navbar"
import Footer from "./Component/Footer/Footer"
import Blog from "./Component/Blog/Blog"
import About from "./Component/About/About"
import Contact from "./Component/Contact/Contact"
import Class from "./Component/Class/Class"
import Notfound from "./Component/Notfound/Notfound"
export default function App() {
    const routes = createHashRouter([
        {
            path: "", element: <Layout />, children: [
                { index: true, element: <Home /> },
                { path: "navbar", element: <Navbar /> },
                { path: "footer", element: <Footer /> },
                { path: "about", element: <About /> },
                { path: "class", element: <Class /> },
                { path: "blog", element: <Blog /> },
                { path: "contact", element: <Contact /> },
                { path: '*', element: <Notfound /> },
            ]
        }
    ])
    return (
        <RouterProvider router={routes} />
    )
}
