import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetail from './components/BoodDetail/BookDetail';
import ListedBooks from './components/ListedBooks/ListedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    ErrorBoundary: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch(`/booksData.json`) //do not load the all the books for one book
      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch(`/booksData.json`) //do not load all data for some
      },
      {
        path:'dashboard',
        element: <Dashboard></Dashboard>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
