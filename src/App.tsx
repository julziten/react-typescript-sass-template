import { Outlet, Link } from "react-router-dom";
import './App.scss';


// check why is not rendering other components as 404
function App(): JSX.Element  {

  return (
      <div>
      <h1 className="ColorfullTitle">Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
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