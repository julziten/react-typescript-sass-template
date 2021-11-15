
import { Navigate, useRoutes } from 'react-router-dom';
import AccountLayout from './components/templates/AccountLayout';
import HomePage from './components/templates/HomePage';
import './App.scss';
// import { Route, Switch } from 'react-router';


// check why is not rendering other components as 404
// only compiling in Terminal and not in VSCode -
function App(): JSX.Element  {

  const mainRoutes = {
    path: '/',
    element: <HomePage />,
    children: [
      {path: '*', element: <Navigate to='/404' />},
      {path: '/', element: <Home />},
      {path: '404', element: <Home404 />},
      {path: 'users', element: <Users />},
      {path: 'colors', element: <Colors />},
      {path: 'shapes', element: <Shapes />},
    ],
  };

  const accountRoutes = {
    path: 'account',
    element: <AccountLayout />,
    children: [
      {path: 'about', element: <Navigate to='/users' />},
      {path: 'users', element: <Users />},
      {path: 'colors', element: <Colors />},
      {path: 'shapes', element: <Shapes />},
    ],
  };

  const routing = useRoutes([mainRoutes, accountRoutes]);


  return (
      <div className="Container--App">
        { routing }
      </div>
  );

}

export default App;


export const Home = () => {
  return (
  <div className='Container--Home'>
    <h1>Home</h1>
  </div>
  );
}

export const Home404 = () => {
  return <h1>404</h1>
}

export const About = () => {
  return <h1>About</h1>
}

export const Users = () => {
  return <h1>Users</h1>
}

export const Colors = () => {
  return <h1>Colors</h1>
}

export const Shapes = () => {
  return <h1>Shapes</h1>
}