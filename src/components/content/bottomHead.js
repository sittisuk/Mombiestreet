import React from 'react';
import ImageBanner from './../../images/tour.png';
import './../main.css';

class BottomHead extends React.Component {
    render() {
        return (
            <div className="relative">
                <img src={ImageBanner} className="imgs" alt="Banner"/>
                <div className="container">
                    <p className="textBefor">
                        We <span className="hightlight">collect and curate</span><br/>
                        articles, opinions and images<br/>
                        from around the world
                    </p>
                </div>
            </div>
        );
    }
}

export default BottomHead;