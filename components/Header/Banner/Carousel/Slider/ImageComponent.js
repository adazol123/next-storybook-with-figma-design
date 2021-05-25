
export const ImageComponent = ({ src }) => {

    let imgStyle = {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
    }
    return (
        <img src={src} alt="image carousel" style={imgStyle}/>
    )
}



 export const _images = [
    'https://images.unsplash.com/photo-1606486827673-4c17dc1a54ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1518623001395-125242310d0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1204&q=80',
    'https://images.unsplash.com/photo-1531321203830-ca0f46a2607b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
    'https://images.unsplash.com/photo-1464839917112-b7a556412fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
]

export const imageData = [
    { 
        title: 'Vel nostrum earum nulla', 
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nostrum earum nulla tempora excepturi placeat natus commodi obcaecati cumque doloremque.', 
        img: 'https://images.unsplash.com/photo-1464839917112-b7a556412fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        typing: [ 
            'Developer', 2000,
            'Programmer', 2000,
            'Developing', 2000,
            'DevCon', 2000,
            'Developer', 2000,
        ]
    },
    { 
        title: 'Second nostrum earum nulla', 
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        img: 'https://images.unsplash.com/photo-1531321203830-ca0f46a2607b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
        typing: [ 
            'Developer', 2000,
            'Programmer', 2000,
            'Enthusiastic', 2000,
            'Noob Dreamer', 2000,
            'Tech Savy', 2000,
            'Investor', 2000
        ]
    },
    { 
        title: 'Third nostrum earum nulla', 
        subtitle: 'Lorem um earum nulla tempora excepturi placeat natus commodi obcaecati cumque doloremque.', 
        img: 'https://images.unsplash.com/photo-1518623001395-125242310d0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1204&q=80',
        typing: [ 
            'Developer', 2000,
            'Programmer', 2000,
            'Enthusiastic', 2000,
            'Noob Dreamer', 2000,
            'Tech Savy', 2000,
            'Investor', 2000
         ]
    },
    { 
        title: 'Fourth nostrum earum nulla', 
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing arum nulla tempora excepturi placeat natus commodi obcaecati cumque doloremque.', 
        img: 'https://images.unsplash.com/photo-1606486827673-4c17dc1a54ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        typing: [ 
            'Developer', 2000,
            'Programmer', 2000,
            'Enthusiastic', 2000,
            'Noob Dreamer', 2000,
            'Tech Savy', 2000,
            'Investor', 2000
         ]
    },

]


export const typewriter = [
    'Developer', 2000,
    'Programmer', 2000,
    'Enthusiastic', 2000,
    'Noob Dreamer', 2000,
    'Tech Savy', 2000,
    'Investor', 2000
]