import { createBrowserRouter } from "react-router";
import React from 'react';
import Root from "../Root/Root";
import DashBoard from "../Component/DashBoard/DashBoard";
import Upload from '../Component/Upload/Upload'
import Posts from "../Component/Posts/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: DashBoard,
      },
      {
        path:'/upload',
        Component:Upload
      },
     {
       path:'/posts',
       Component:Posts
     }
    ],
  },
]);
export default router;
