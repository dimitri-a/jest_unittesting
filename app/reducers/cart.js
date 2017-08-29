
let products = [
    {
        id: 1,
        name: 'apples',
        price: 12
    },
        {
        id: 2,
        name: 'pears',
        price: 20
    }, {
        id: 3,
        name: 'hoer',
        price: 20
    }
]

const cart = (state = products, action) => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                action.object
            ];


        default:
            return state;
    }
}

export const getTotal = state => state.reduce(function(sum, item) {
    console.log('sum=',sum)
    return sum + item.price;
}, 0);


export default cart;