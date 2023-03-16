import { addProduct, removeProduct, updateProductAmount, clear } from '.'

export const addProductToCart = (product, amount) => (dispatch) => {
  dispatch(addProduct({ ...product, amount }))
}

export const deleteProductFromCart = (productId) => (dispatch) => {
  dispatch(removeProduct({ id: productId }))
}

export const updateCartAmount = (productId, amount) => (dispatch) => {
  dispatch(updateProductAmount({ id: productId, amount }))
}

export const clearCart = () => (dispatch) => {
  dispatch(clear())
}