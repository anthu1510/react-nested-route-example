import {Switch, Route, Link} from 'react-router-dom';

const Product = () => {
    return (
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-sm bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <Switch>
                        <Route path="/product" exact>
                            <h1>Welcome to Product</h1>
                        </Route>
                        <Route path="/product/blog">
                            <h1>Welcome to Product Inside Blog</h1>
                        </Route>
                        <Route path="/product/contact">
                            <h1>Welcome to Product Inside Contact</h1>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Product;
