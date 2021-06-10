const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: 'hats',
            imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
            linkURL: 'shop/hats',
        },
        {
            id: 2,
            title: 'jackets',
            imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
            linkURL: 'shop/jackets',
        },
        {
            id: 3,
            title: 'sneakers',
            imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            linkURL: 'shop/sneakers',
        },
        {
            id: 4,
            title: 'womens',
            imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
            style: 'large',
            linkURL: 'shop/womens',
        },
        {
            id: 5,
            title: 'mens',
            imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
            style: 'large',
            linkURL: 'shop/mens',
        }
    ],
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;