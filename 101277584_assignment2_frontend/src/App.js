import {useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import List from './List';
import Add from './Add';
import Update from './Update';
import View from './View';

function App() {
  const routes = useRoutes([
    { path: "/", element: <List /> },
    { path: "/add-employee/_add", element: <Add /> },
    { path: "/add-employee/:id", element: <Update /> },
    { path: "/view-employee/:id", element: <View /> }
  ]);
  
  return routes;
}

export default App;