import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink

} from 'reactstrap';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" color="secondary">
                    <p> CopyWright @ Jerrywebman </p>


                </Navbar>
            </div>
        );
    }
}
export default Footer