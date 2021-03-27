import {Switch, Route, Link} from 'react-router-dom';

const Service = () => {
    return (
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-sm bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/service">Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/service/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/service/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <Switch>
                        <Route path="/service" exact>
                            <h1>Welcome to Service</h1>
                        </Route>
                        <Route path="/service/blog">
                            <h1>Welcome to Service Inside Blog</h1>
                        </Route>
                        <Route path="/service/contact">
                            <h1>Welcome to Service Inside Contact</h1>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Service;
