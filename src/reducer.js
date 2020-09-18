export const initialState = {

    basket:[],
    user: null

};

//Selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {

    switch(action.type) {
        case 'Add_to_Basket':
            return{
                
                ...state,
                basket: [...state.basket, action.item],

            };
        
        case 'Remove_from_Basket':
            const index = state.basket.findIndex((basketItem)  => basketItem.title === action.title);
            let newBasket = [...state.basket];

            if (index >= 0){

                newBasket.splice(index, 1);

            }else {

                console.warn('Cannot Remove Product (title: ${action.title}) as it is not in basket!')

            }

            return {

                ...state,
                basket: newBasket

            }

        case "SET_USER":
            return {

                ...state,
                user: action.user

            }

            default: 
                return state;

    }

};

export default reducer;