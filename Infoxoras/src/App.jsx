
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/layout/app-layout'
import LandingPage from './pages/Landing/landing';
import Itconsulting from './pages/itconsulting';
import GetInTouch from './pages/getInTouch';
import Aboutus from './pages/aboutus';
import UnifiedContactComponent from './pages/contectus';
import Careers from './pages/Careers';
import Page404 from './pages/404Page';
import Courses from './pages/Courses';
import Sitemap from './pages/sitemap';
import Marketing from './pages/Marketing';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/it-consulting',
        element: <Itconsulting />,
      },
      {
        path: '/get-in-touch',
        element: <UnifiedContactComponent />,
      },
      {
        path: '/about-us',
        element: <Aboutus />,
      },
      {
        path: '/careers',
        element: <Careers />,
      },
      {
        path: '/courses',
        element: <Courses />,
      },
      {
        path: '/sitemap',
        element: <Sitemap />,
      },
      {
        path: '/marketing',
        element: <Marketing/>,
      },
      {
        path: '*', // Wildcard route for handling 404 errors
        element: <Page404 />,
      },
      
    ],
  },
]);


function App() {
  return(
    <RouterProvider router={router}/>
  )

}

export default App
