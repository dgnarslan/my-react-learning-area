import { createBrowserRouter } from 'react-router-dom';
import Home from '~/pages/home/';
import Explore from '~/pages/explore/';
import Notifications from '~/pages/notifications/';
import NotFound from '~/pages/not-found/index.jsx';
import MainLayout from '~/layouts/main/index.jsx';
import Messages from "~/pages/messages/index.jsx";
import Lists from "~/pages/lists/index.jsx";
import Bookmarks from "~/pages/bookmarks/index.jsx";
import Verified from "~/pages/verified/index.jsx";
import Profile from "~/pages/profile/index.jsx";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'explore',
        element: <Explore />,
      },
      {
        path: 'notifications',
        element: <Notifications />,
      },
      {
        path: 'messages',
        element: <Messages />,
      },
      {
        path: 'lists',
        element: <Lists />,
      },
      {
        path: 'bookmarks',
        element: <Bookmarks />,
      },
      {
        path: 'verified',
        element: <Verified />,
      },{
        path: 'profile',
        element: <Profile />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
