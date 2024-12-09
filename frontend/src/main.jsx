import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Login from './components/Login/Login.jsx'
import Contact from './components/Contact/Contact.jsx'
import Signup from './components/Register/Signup.jsx'
import User from './components/User/User.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import DashboardLayout from './DashboardLayout.jsx';
import TimeTable from './components/Timetable/Timetable.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/login',
//         element: <Login />
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       },
//       {
//         path: '/signup',
//         element: <Signup />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element= {<Layout />} >
      <Route  path='/' element= {<Home />} />
      <Route  path='/about' element= {<About />} />
      <Route  path='/login' element= {<Login />} />
      <Route  path='/contact' element= {<Contact />} />
      <Route  path='/signup' element= {<Signup />} />
      <Route  path='user/:userid' element= {<User />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Route>

    <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path='/dashboard/:id/timetable' element={<TimeTable />} />
      </Route>
      
    </>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
