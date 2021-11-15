import { Link, Outlet } from "react-router-dom";

const HomePage: React.FC = (): JSX.Element => {
    return (
        <>

            <nav className="Homepage--Navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='/account/list'>Users</Link></li>
                    <li><Link to='/account/1'>Colors</Link></li>
                    <li><Link to='/something-else'>Shapes</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
export default HomePage;