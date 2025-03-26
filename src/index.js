import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollToTop from './ScrollToTop';
import { createBrowserRouter, RouterProvider, Route, BrowserRouter, useRoutes } from "react-router-dom";
import Routess from './routes';

const root = ReactDOM.createRoot(document.getElementById("root"));

function AppRoutes() {
  const element = useRoutes(Routess);
  return element;
}

root.render(
 <BrowserRouter>
 <ScrollToTop/>
 <AppRoutes/>
 </BrowserRouter>
);