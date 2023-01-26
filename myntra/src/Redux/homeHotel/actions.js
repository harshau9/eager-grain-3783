import axios from "axios";
import hotel_base_url from './home&Hotel';

// Action Types creates
export const GET_ROOMS = "GET_ROOMS";
export const FILTER_ROOMS = "FILTER_ROOMS";
export const SORT_ROOMS = "SORT_ROOMS";
export const ADD_PRODUCT = 'add/product';
export const REMOVE_PRODUCT = 'remove/product';
export const UPDATE_PRODUCT = 'update/product';
export const PRODUCT_LOADING = 'product/loading';
export const PRODUCT_ERROR = 'product/error';
export const PRODUCT_SUCCESS = 'product/success';


// Action objects Creators
export const getData = (data) => {
  return {
    type: GET_ROOMS,
    payload: data,
  };
};

export const filterData = (data) => {
  return {
    type: FILTER_ROOMS,
    payload: data,
  };
};

export const sortData = (data) => {
  return {
    type: SORT_ROOMS,
    payload: data,
  };
};

export const getProduct = (page = 1, limit = 3) => async (dispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  try {
    let res = await axios.get(`${hotel_base_url}?_page=${page}&_limit=${limit}&_sort=cost&_order=asc`);
    dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: PRODUCT_ERROR, payload: e.message });
  }
};

export const addProduct = (message) => async (dispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  try {
    let res = await axios.post(`${hotel_base_url}`, message);
    dispatch({ type: ADD_PRODUCT, payload: res.data });
  } catch (e) {
    dispatch({ type: PRODUCT_ERROR, payload: e.message });
  }
};

export const updateProduct = (id, changes) => async (dispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  try {
    let res = await axios.patch(`${hotel_base_url}/${id}`, {
      ...changes
    });
    dispatch({ type: UPDATE_PRODUCT, payload: res.data });
  } catch (e) {
    dispatch({ type: PRODUCT_ERROR, payload: e.message });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  try {
    let res = await axios.delete(`${hotel_base_url}/${id}`);
    dispatch({ type: REMOVE_PRODUCT, payload: id });
  } catch (e) {
    dispatch({ type: PRODUCT_ERROR, payload: e.message });
  }
};
