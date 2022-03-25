import React from 'react';
//imports react-router-dom
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//imports de componentes
import Inicio from "./components/Inicio/inicio"
import Layout from "./components/Layout/layout"
import Home from './pages/index'

function App() {
    return(
        <>  
             <Router>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>

                    </Switch>
                </Layout>
            </Router>

        </>
     
     );
 }
 
 export default App;