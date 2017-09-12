export default function cart(state=[{id:1,name:'name',completed:true}],action){
    switch (action.type) {
        case "ADD":

            const test = [
                ...state,
                {
                    id: state.length,
                    name: action.text,
                    completed: false
                }
            ];
            //todo remove
            debugger;
            return [
                ...state,
                {
                    id: state.length,
                    name: action.text,
                    completed: false
                }
            ];

        default:
            return state;
    }
}

