import React from 'react';
//imports react-router-dom
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//imports de componentes
import Layout from "./components/Layout/layout"
//Pages
import { Home, About, Services, ContactUs, SignUp } from './pages/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './components/Filter/Category/category.jsx';
import ItemDetaliContainer from './components/ItemDetailContainer/itemDetaliContainer';

function App() {
    return(
        <>  
             <Router>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/about" exact component={About}></Route>
                        <Route path="/services" exact component={Services}></Route>
                        <Route path="/contact-us" exact component={ContactUs}></Route>
                        <Route path="/sign-up" exact component={SignUp}></Route>
                        <Route exact path="/:categoria">
                            <Category/>
                        </Route>
                        <Route exact path="/:categoria/:id">
                            <ItemDetaliContainer/>
                        </Route>

                    </Switch>
                </Layout>
            </Router>

        </>
     
     );
 }
 
 export default App;