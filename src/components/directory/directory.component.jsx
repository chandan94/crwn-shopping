import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menuItem/menu-item.component';
import './directory.styles.scss';


const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...sectionProps }) => {
                return <MenuItem key={id} {...sectionProps} />
            })
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);