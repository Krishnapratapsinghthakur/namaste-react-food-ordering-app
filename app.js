import React from 'react'
import reactDOM from 'react-dom/client'
import Header from './src/Components/Header'
import Body from './src/Components/Body'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import Error from './src/Components/Error'
import About from './src/Components/About'
import Contact from './src/Components/Contact'
import ResMenu from './src/Components/ResMenu'


const Applayout=()=>{

    return(
        <div>
            <Header />
            <Outlet />
            
            
        </div>
    ) 
}

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Applayout />,
        // errorElement:<Error />,
        children:[
            {
                path:'/',
                element:<Body />
        
            },
            {
                path:'/about',
                element:<About />
        
            },
            {
                path:'/contact',
                element:<Contact />,
        
            },
            {
                path:"/restaurent/:id",
                element:<ResMenu />
            }
        ]
        
        
    }
   
])
const root= reactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)