let initialState = {
    productList: [],
}

function productReducer(state=initialState, action){
    const { type, payload} = action;

    switch (type) {
        case "GET_PRODUCT_SUCCESS":
            return {...state, productList: payload.result}
        case "GET_PRODUCT_DETAIL":
            return {...state, productList: payload.response}
        default:
           return {...state}
    }
}

export default productReducer;