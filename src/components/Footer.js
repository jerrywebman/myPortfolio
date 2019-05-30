import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <footer>
                    <div className="fa-3x footerFonts">
                        <span>
                            <h5>Let's Get Social:</h5>
                            <a href="https://twitter.com/jerrywebman"><i className="fa fa-twitter"></i></a>
                            <a href="https://instagram.com/jerry_webman"><i className="fa fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/jerry-ifeanyi-63a07a12a/"><i className="fa fa-linkedin"></i></a>
                            <a href="mailto: jerrycifeanyi@gmail.com"><i className="fa fa-envelope"></i></a>
                        </span>
                    </div>
                    <div>
                        <h5>© JerryWebman All rights reserved.</h5>
                    </div>
                </footer>
            </div >
        );
    }
}
export default Footer