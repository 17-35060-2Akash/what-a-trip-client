import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Destination from "../Pages/Destination/Destination";
import BookTrip from "../Pages/Shared/BookTrip/BookTrip";
import Hotels from "../Pages/Hotels/Hotels";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => fetch('https://what-a-trip-server.vercel.app/places')

            },
            {
                path: '/destination',
                element: <Destination></Destination>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contacts',
                element: <Contact></Contact>
            },
            {
                path: '/book/:id',
                element: <BookTrip></BookTrip>,
                loader: async ({ params }) => fetch(`https://what-a-trip-server.vercel.app/places/${params.id}`)
            },
            {
                path: '/hotels/:categoryId',
                element: <Hotels></Hotels>,
                loader: async ({ params }) => fetch(`https://what-a-trip-server.vercel.app/hotels/${params.categoryId}`)
            },

        ]
    }
]);