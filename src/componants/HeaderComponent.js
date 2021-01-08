import React , {Component} from 'react';
import {Jumbotron , Navbar , NavbarBrand , Nav , NavItem , Collapse , NavbarToggler} from 'reactstrap'
import {NavLink} from 'react-router-dom'

class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        }
        //to available thiese kinds of methods (toggleNav) within JSX we need to bind it
        this.toggleNav = this.toggleNav.bind(this);
        //then toggleNav in bounded to "this".since we are allowed to use it along with "this" keyword
    }

    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }


    render() {
        return(
        <div>
            {/* expand = "md" means the navbar will shown in its full form fron medium to upwords */}
            <Navbar dark expand="md">
                <div className="container">
                    {/* Below type of function calling can be done by binding the intended function */}
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand  className="mr-auto" href="/">
                        <img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion'/>
                    </NavbarBrand>
                    {/* isOpen expects a boolean attribute that specifies its content is open or folded */}
                    {/* This Collaps will apply to navbar since it is mentioned navbar inside of the colleps tag */}
                     <Collapse isOpen = {this.state.isNavOpen} navbar >
                        <Nav navbar>
                            <NavItem>
                                {/* NavLink is very similar to the a tag in html and this will remain as active
                                while we are in the mentioned page */}
                                <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span> Home </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span> About Us </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span> Menu </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span> Contact Us </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
             
             <Jumbotron>
                 <div className="container">
                     <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p p > We take inspiration from the World 's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                     </div>
                 </div>
             </Jumbotron>
        </div>
        );
    }
}

export default Header;