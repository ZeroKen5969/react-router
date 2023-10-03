import './App.css';
import { RouteObject, useRoutes } from 'react-router-dom';
import { Main } from './views/Main';
import { About } from './views/About';

const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
];

function App() {
  const appRoute = useRoutes(routerConfig);
  return (
    <div className="App">
      {appRoute}
    </div>
  );
}

export default App;
