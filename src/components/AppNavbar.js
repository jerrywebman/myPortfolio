import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class AppNavbar extends React.Component {
    //     render() {
    //         return (
    //             <div>
    //                 <Link to="/Portfolio"><Button>Portfolio</Button></Link>
    //                 <Link to="/Contact"><Button>Contact</Button></Link>
    //             </div>
    //         );
    //     }
    // }
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand ><Link to="/" className="NavLinks">JerryWebman</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink><Link to="/" className="NavLinks">Home</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/portfolio" className="NavLinks">Portfolio</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/contact" className="NavLinks">Contact</Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default AppNavbar