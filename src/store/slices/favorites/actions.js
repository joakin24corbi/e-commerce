import { addProduct, removeProduct, clear } from '.'

export const addProductToFavorites = (product) => (dispatch) => {
  dispatch(addProduct({ ...product }))
}

export const deleteProductFromFavorites = (productId) => (dispatch) => {
  dispatch(removeProduct({ id: productId }))
}

export const clearFavorites = () => (dispatch) => {
  dispatch(clear())
}