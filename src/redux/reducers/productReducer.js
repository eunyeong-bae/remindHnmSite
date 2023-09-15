let initialState = {
    productList: [],
    productDetailList:[],
    cartList: [],
    FavoriteList: [],
}

function productReducer(state=initialState, action){
    const { type, payload} = action;

    switch (type) {
        case "GET_PRODUCT_SUCCESS":
            return {...state, productList: payload.result}
        case "GET_PRODUCT_DETAIL":
            return {...state, productDetailList: payload.response}
        case "PUT_PRODUCT_CART":
            return {...state, cartList: [...state.cartList, payload.Item]}
        default:
           return {...state}
    }
}

export default productReducer;