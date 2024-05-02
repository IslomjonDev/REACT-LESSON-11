import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Login from '../pages/login/Login'

export const ROUTERS = [
    {
        id: 1,
        title: "Home",
        component: <Home/>,
        link: "/"
    },
    {
        id: 2,
        title: "About",
        component: <About/>,
        link: "/about"
    },
    {
        id: 3,
        title: "Login",
        component: <Login/>,
        link: "/register"
    },
]