import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../component/web/home/Home.jsx";
import Categories from "../component/web/categories/Categories.jsx";
import DashboardLayout from "./DashboardLayout.jsx";
import Rigester from "../component/web/register/Rigester.jsx";
import HomeDashBord from './../component/dashpord/home/home.jsx';
import CategoriesDashbord from './../component/dashpord/categories/Categories.jsx';
import Login from "../component/web/login/Login.jsx";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement:<h2>page not found ....web</h2>,
  children :[
  {
  path:'home',
  element:<Home />
  
  },
  
  {
    path:'categories',
    element:<Categories />
    },
  
    {
      path:'register',
      element:<Rigester />
      
      },
      {
        path:'login',
        element:<Login/>
      }



  ]
    },
    {
  path:'/dashbord',
  element:<DashboardLayout />,
  errorElement:<h2>page notfound ...admin</h2>,
  children:[
  {
    path:'home',
    element:< HomeDashBord/>
  },{
  
    path:'categories',
    element:<CategoriesDashbord />
  }
  
  ]
  
    }
  
  
  ]);