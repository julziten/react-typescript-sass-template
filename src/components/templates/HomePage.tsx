import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
  } from 'react-router-dom';
  

export const HomePage = () => {
    return (
        <div className='HomePage--Container'>
            <h1>Here is the HomePage</h1>

            <div className='Navbar--Container'>
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/about"> About </Link>
                    </li>
                    <li>
                        <Link to="/users"> Users </Link>
                    </li>
                </ul>
            </div>


            <Switch>
                <Route path="/about">
                    <h1>About</h1>
                </Route>
            </Switch>


        </div>
    )
}
