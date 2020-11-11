import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavbarBrand,NavItem,NavbarToggler,Collapse,Button} from 'reactstrap';
import logo from '../images/logo.png';
import bannarperson from '../images/heroman.png';



class Header extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
               <Navbar color="dark" expand="md">
                    <NavbarBrand href="/"><img src={logo}  className="logo-main" />Exam Blog</NavbarBrand>
                    <NavbarToggler/>
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="mr-3">
                                <Link to="/aboutme">About Me</Link>
                            </NavItem>
                            <NavItem className="mr-3">
                                <Link to="/blog">Blog</Link>
                            </NavItem>
                            <NavItem className="mr-3">
                                <Link to="/exam">Exam</Link>
                            </NavItem>
                        </Nav>
                    
                    </Collapse>
                </Navbar>

                <div className="bannar-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 bannar-left-middle">
                                <div className="left-side">
                                    <div className="sub-title">
                                        Online Exam Blog
                                    </div>
                                    <div className="title">
                                        This is Online Exam Blog Where You can Take Part Of Mutiple Choose Question Exams
                                    </div>
                                    <div className="button">
                                        <Button outline color="primary" size="lg">
                                            <Link className="bannar-about-us-link" to="/aboutme">About Us</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="right-side">
                                    <img src={bannarperson}  className="bannar-person"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;