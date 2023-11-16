let initialState = {
    productList: [],
    productDetailList:[],
    cartList: [],
    favoriteList: [],
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
        case "PUT_FAVORITE_CART":
            return {...state, favoriteList: [...state.favoriteList, payload.item]}
        default:
           return {...state}
    }
}

export default productReducer;