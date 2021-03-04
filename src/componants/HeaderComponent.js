import React , {Component} from 'react';
import {Jumbotron , Navbar , NavbarBrand , Nav , NavItem , Collapse , NavbarToggler , Modal , ModalHeader , ModalBody , Form , FormGroup, Label , Button , Input} from 'reactstrap'
import {NavLink} from 'react-router-dom'

class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModelOpen:false
        }
        //to available thiese kinds of methods (toggleNav) within JSX we need to bind it
        this.toggleNav = this.toggleNav.bind(this);
        //then toggleNav in bounded to "this".since we are allowed to use it along with "this" keyword
        this.toggleModel = this.toggleModel.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }


    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    toggleModel(){
        this.setState({
            isModelOpen: !this.state.isModelOpen
        });
    }

    handleLogin(event){
        this.toggleModel();
        alert("Username : " + this.username.value + " Password : " + this.password.value 
        + " Remember : " + this.remember.checked);
        event.preventDefault();

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
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModel}>
                                    <span className="fa fa-sign-in fa-lg"></span>Login
                                </Button>
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
             <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel}>
                 <ModalHeader toggle={this.toggleModel}>Login</ModalHeader>
                 <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">UserName</Label>
                            <Input type="text" id="username" name="username"
                            innerRef={(input) => this.username = input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="text" id="password" name="password"
                            innerRef={(input) => this.password = input}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="remember" name="remember"
                                innerRef={(input) => this.remember = input}/>
                                Remember Me
                            </Label>
                        </FormGroup>
                        <Button type="submit" className="bg-primary" value="Submit">Login</Button>
                    </Form>
                 </ModalBody>
             </Modal>
        </div>
        );
    }
}

export default Header;