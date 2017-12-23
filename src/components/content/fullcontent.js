import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Cols from './fullcontentItem';

class Fullcontent extends React.Component {

    row = () => {
        const Background = {
            'A': [
                'Televistion \n Boardcast',
                'Print Boardcast',
                'Online Magazines',
                'Radio \n Boardcast',
                'Magazine',
                'Photo\nJournalism',
                'Podcasts',
                'Online \n Newspaper',
                'RSS \n Readers'
            ],
            'B': [
                'http://conceptnewscentral.com/wordpress/wp-content/uploads/2017/10/fulton-st-New-York-View-HD-Wallpaper.jpg',
                'https://www.setaswall.com/wp-content/uploads/2017/03/City-Night-Raod-4K-Wallpaper-3840x2160.jpg',
                'http://icloudpicture.com/wp-content/uploads/2017/08/2017-4K-Wallpaper.jpg',
                'http://s1.picswalls.com/wallpapers/2016/06/10/city-4k-wallpaper_06523766_309.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMVcb0jPeMtQWOK1JUeMr2iS0YlGptjfbSY3LB9Yqk4ztm9GO',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8_0y0RcDqVukHRYX3wGMPUCAvDxTNU7c_3bpsHyoHL5C8pSB',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxngiyusfdvYQa5I6HRU6_c1xhn6Ou3MPl_6lTa1wmYd93ClSQrw',
                'http://icloudpicture.com/wp-content/uploads/2017/08/4K-Wallpaper.jpg',
                'http://www.vactualpapers.com/web/wallpapers/beautiful-landscape-high-resolution-4k-wallpaper-44/3840x2160.jpg'
            ],
            'rows': []
        }
        var i = 0;
        var j = 0;
        Background.B.forEach(element => {
            Background.rows.push(<Cols image={ element } Text={ Background.A[i++]} key={j++} />)
        });
        return Background.rows;
     }

    render() {
        return (
            <div className="sectionOurexpert">
                <div className="container marginBottom">
                    <h1 className="textAlign">Our Expertise</h1>
                    <p className="textAlign">This is a subtitle, to make it look good.</p>
                </div>
                <Grid>
                    <Row className="show-grid">
                        { this.row() }
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Fullcontent;