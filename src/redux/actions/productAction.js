import axios from "axios";

function getProductLists(searchkeyword) {
    return async(dispatch, getState) => {
        const result = await axios.get(`https://my-json-server.typicode.com/eunyeong-bae/remindHnmSite/products?q=${searchkeyword}`)
                      .then(res => {
                        return res.data;
                      })
                      .catch(error=>{
                        console.log(error,'eeroro');
                      })
  
      dispatch({
        type:'GET_PRODUCT_SUCCESS',payload:{result}
      })
    }
}

function getProductDetailInfo(id) {
  return async(dispatch, getState) =>{
    const response = await axios(`https://my-json-server.typicode.com/eunyeong-bae/remindHnmSite/products/${id}`)
        .then((res) => {
              return res.data;
            })
        .catch(e => {
          console.log('error',e);
        })
    dispatch({
      type:"GET_PRODUCT_DETAIL",
      payload:{
        response
      }
    })
  }
}

export const productAction={getProductLists, getProductDetailInfo}