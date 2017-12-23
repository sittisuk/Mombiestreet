import React from 'react';
import { Col } from 'react-bootstrap';

class Cols extends React.Component {
    render() {
        const sectionStyle = {
            backgroundImage: `url( ${ this.props.image } )`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            height: "400px",
            filter: `brightness(0.5)`
        };
        return (
            <Col md={4}>
                <div className="card">
                    <div style={ sectionStyle }></div>
                    <span className="text">{ this.props.Text }</span>
                </div>
            </Col>
        );
    }
}

export default Cols;