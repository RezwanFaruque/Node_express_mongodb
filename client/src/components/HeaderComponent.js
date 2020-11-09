import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavbarBrand,NavItem,NavbarToggler,Collapse,Button} from 'reactstrap';



class Header extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
               <Navbar color="dark" expand="md">
                    <NavbarBrand href="/">Exam Blog</NavbarBrand>
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
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="left-side">
                                    <div className="sub-title">
                                        Online Exam Blog
                                    </div>
                                    <div className="title">
                                        This is Online Exam Blog Where You can Take Part Of Mutiple Choose Question Exams
                                    </div>
                                    <div className="button">
                                        <Button color="primary" size="lg">
                                            <Link className="bannar-about-us-link" to="/aboutme">AboutUS</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="right-side">

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