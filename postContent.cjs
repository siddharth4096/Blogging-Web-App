const { v4: uuidv4 } = require('uuid');


export let posts=[
    {
        id : uuidv4(),
        img : "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title : "My First College Trip",
        content : " Hello my dear friends",
    },

    {
        id : uuidv4(),
        img : "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title : " My first photo",
        content : " HElllo Wolrds",
    },

    {
        id : uuidv4(),
        img : "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title : " Hello sir",
        content : " dhgghdghfdsgkljsghsghlsghsoghoolgs",
    }
];



module.exports = posts;