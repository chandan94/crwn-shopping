import React from 'react';
import MenuItem from '../menuItem/menu-item.component';
import './directory.styles.scss';


class Directory extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'hats',
                    imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkURL: 'hats',
                },
                {
                    id: 2,
                    title: 'jackets',
                    imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                },
                {
                    id: 4,
                    title: 'womens',
                    imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
                    style: 'large'
                },
                {
                    id: 5,
                    title: 'mens',
                    imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
                    style: 'large'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...sectionProps}) => {
                        return <MenuItem key= {id} {...sectionProps} />
                    })
                }
            </div>
        );
    }
}

export default Directory;