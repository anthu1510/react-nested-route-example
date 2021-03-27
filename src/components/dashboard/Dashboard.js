import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Service from "./Service";
import Product from "./Product";

const Dashboard = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-sm bg-light">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/service">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Product</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5">
                        <Switch>
                            <Route exact path="/">
                                <h1>Welcome to Dashbaord</h1>
                            </Route>
                            <Route path="/service">
                                <Service/>
                            </Route>
                            <Route path="/product">
                                <Product/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Dashboard;
