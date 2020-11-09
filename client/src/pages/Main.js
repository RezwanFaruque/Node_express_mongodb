import React,{Component} from "react";
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import AboutMe from './AboutMe';
import Blog from './Blog';
import Exam from './Exam';
import {Switch,Redirect,Route,withRouter} from "react-router-dom";

class Main extends Component{
    
    render(){

        return(
            <main>
                <Header />

                <Switch>
                    <Route exact path='/aboutme' component={AboutMe} />
                    <Route exact path='/blog' component={Blog} />
                    <Route exact path='/exam' component={Exam}/>
                </Switch>

                <Footer />
            </main>
        )
    }
}

export default withRouter(Main);