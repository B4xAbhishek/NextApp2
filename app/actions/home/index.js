// import axios from 'axios';

import {
  HOME_REQUEST,
  HOME_REFRESH,
  HOME_SUCCESS,
  HOME_FAILURE,
  HOME_DETAIL_REQUEST,
  HOME_DETAIL_SUCCESS,
  HOME_DETAIL_FAILURE,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAILURE,
  SUB_CATEGORIES_REQUEST,
  SUB_CATEGORIES_SUCCESS,
  SUB_CATEGORIES_FAILURE,
  HOME_REFRESH_COMPLETE,
  GETFAVORITE_FAILURE,
  GETFAVORITE_REQUEST,
  GETFAVORITE_SUCCESS,
  ADDFAVORITE_FAILURE,
  ADDFAVORITE_REQUEST,
  ADDFAVORITE_SUCCESS,
  DELFAVORITE_REQUEST,
  DELFAVORITE_SUCCESS,
  DELFAVORITE_FAILURE,
  MY_ADS_REQUEST,
  MY_ADS_SUCCESS,
  MY_ADS_FAILURE,
  DELETEAD_REQUEST,
  DELETEAD_SUCCESS,
  DELETEAD_FAILURE,
} from '../action-type';

import axios from 'axios';
import { AppURLs } from '../../constants/constant';

//Home Feed

function homeRequest() {
  return {
    type: HOME_REQUEST,
  };
}

function homeRefresh() {
  return {
    type: HOME_REFRESH,
  };
}

function homeRefreshResolve() {
  return {
    type: HOME_REFRESH_COMPLETE,
  };
}

function homeSuccess(payload) {
  return {
    type: HOME_SUCCESS,
    entities: payload,
  };
}

function homeFailure(message) {
  return {
    type: HOME_FAILURE,
    error: message,
  };
}

export function homeFeed(query, page, subcateid, refresh) {
  return (dispatch, getState) => {
    if (refresh) {
      dispatch(homeRefresh());
    } else {
      dispatch(homeRequest());
    }
    return axios
      .post(AppURLs.HomeFeed, {
        search: query,
        subcate_id: subcateid,
        cate_id: getState().entities.home.categoryid,
        page: page,
      })
      .then((response) => {
        debugger
        if (response.data.success) {
          let data = response.data.success.data.data;
          let last = response.data.success.data.last_page;
          getState().entities.home.query = query;
          getState().entities.home.subcatId = subcateid;
          if (page == 1) {
            getState().entities.home.products = [];
            getState().entities.home.products = data;
            getState().entities.home.lastpage = last;
            if (refresh) {
              dispatch(homeRefreshResolve());
            }
            dispatch(homeSuccess({ Home: { products: data } }));
          } else {
            let arr = [...getState().entities.home.products];
            getState().entities.home.products = arr.concat(data);
            getState().entities.home.lastpage = last;
            if (refresh) {
              dispatch(homeRefreshResolve());
            }
            dispatch(homeSuccess({ Home: { products: data } }));
          }
        }
      })
      .catch((error) => {
        debugger
        return dispatch(homeFailure(error));
      });
  };
}

//Feed Details
function homeDetailRequest() {
  return {
    type: HOME_DETAIL_REQUEST,
  };
}

function homeDetailSuccess(payload) {
  return {
    type: HOME_DETAIL_SUCCESS,
    entities: payload,
  };
}

function homeDetailFailure(message) {
  return {
    type: HOME_DETAIL_FAILURE,
    error: message,
  };
}

export function homeDetailFeed(body) {
  return (dispatch, getState) => {
    getState().entities.home.isFavorite = false;
    dispatch(homeDetailRequest());
    return axios
      .post(AppURLs.HomeDetails, body)
      .then((response) => {
        if (response.data) {
          let data = response.data.success.data;
          if (data.is_favorite == 1) {
            getState().entities.home.isFavorite = true;
          }
          getState().entities.home.productDetail = data;
          dispatch(homeDetailSuccess({ Home: { details: data } }));
        } else {
        }
      })
      .catch((error) => {
        return dispatch(homeDetailFailure(error));
      });
  };
}

//catagories

function CategoriesRequest() {
  return {
    type: CATEGORIES_REQUEST,
  };
}

function CategoriesSuccess(payload) {
  return {
    type: CATEGORIES_SUCCESS,
    entities: payload,
  };
}

function CategoriesFailure(message) {
  return {
    type: CATEGORIES_FAILURE,
    error: message,
  };
}

export function Categories() {
  return (dispatch, getState) => {
    dispatch(CategoriesRequest());
    return axios
      .post(AppURLs.Categories)
      .then((response) => {
        if (response.data) {
          let data = response.data.success.data;
          getState().entities.home.categories = data;
          dispatch(CategoriesSuccess({ Home: { categories: data } }));
        } else {
        }
      })
      .catch((error) => {
        return dispatch(CategoriesFailure(error));
      });
  };
}

//Sub-catagories

function SubCategoriesRequest() {
  return {
    type: SUB_CATEGORIES_REQUEST,
  };
}

function SubCategoriesSuccess(payload) {
  return {
    type: SUB_CATEGORIES_SUCCESS,
    entities: payload,
  };
}

function SubCategoriesFailure(message) {
  return {
    type: SUB_CATEGORIES_FAILURE,
    error: message,
  };
}

export function Subcategories() {
  return (dispatch, getState) => {
    dispatch(SubCategoriesRequest());
    return axios
      .post(AppURLs.SubCategories)
      .then((response) => {
        if (response.data.success) {
          let data = response.data.success.data;
          getState().entities.home.subCategories = data;
          dispatch(SubCategoriesSuccess({ Home: { subCategories: data } }));
        } else {
        }
      })
      .catch((error) => {
        return dispatch(SubCategoriesFailure(error));
      });
  };
}

export function setCategory(item) {
  debugger
  return (dispatch, getState) => {
    getState().entities.home.categoryid = item.id;
    getState().entities.home.activeCategory = item;
    let query = getState().entities.home.query;
    let id = getState().entities.home.subcatId
    dispatch(homeFeed(query, 1, id, true))
  };
}

//Add Favorite

function addfavRequest() {
  return {
    type: ADDFAVORITE_REQUEST,
  };
}

function addfavSuccess() {
  return {
    type: ADDFAVORITE_SUCCESS,
  };
}

function addfavFailure() {
  return {
    type: ADDFAVORITE_FAILURE,
  };
}

export function addfavorite(obj, cb) {
  return (dispatch, getState) => {
    dispatch(addfavRequest());
    return axios
      .post(AppURLs.addFavorite, obj)
      .then((response) => {
        if (response.data.success) {
          cb(true, response.data.success.msg);
          dispatch(addfavSuccess({ Home: { fav: true } }));
        } else {
          cb(false, response.data.error);
          dispatch(addfavSuccess({ Home: { fav: true } }));
        }
      })
      .catch((error) => {
        cb(false, 'Server Error');
        return dispatch(addfavFailure(error));
      });
  };
}

//Remove Favorite

function delfavRequest() {
  return {
    type: DELFAVORITE_REQUEST,
  };
}

function delfavSuccess() {
  return {
    type: DELFAVORITE_SUCCESS,
  };
}

function delfavFailure() {
  return {
    type: DELFAVORITE_FAILURE,
  };
}

export function delfavorite(obj, cb) {
  return (dispatch, getState) => {
    dispatch(delfavRequest());
    return axios
      .post(AppURLs.delFavorite, obj)
      .then((response) => {
        if (response.data.success) {
          cb(true, response.data.success);
          dispatch(delfavSuccess({ Home: { del: true } }));
        } else {
          cb(false, response.data.error);
          dispatch(delfavSuccess({ Home: { del: true } }));
        }
      })
      .catch((error) => {
        cb(false, 'Server Error');
        return dispatch(delfavFailure(error));
      });
  };
}

//Get Favorite

function getfavRequest() {
  return {
    type: GETFAVORITE_REQUEST,
  };
}

function getfavSuccess() {
  return {
    type: GETFAVORITE_SUCCESS,
  };
}

function getfavFailure() {
  return {
    type: GETFAVORITE_FAILURE,
  };
}

export function getfavorite(id, page) {
  return (dispatch, getState) => {
    if (page == 1) {
      dispatch(homeRefresh());
    }
    dispatch(getfavRequest());
    return axios
      .post(AppURLs.getFavorite, {
        user_id: id,
        page: page,
      })
      .then((response) => {
        if (response.data.success) {
          let data = response.data.success.data.data;
          let last = response.data.success.data.last_page;
          if (page == 1) {
            getState().entities.home.favorites = data;
            getState().entities.home.lastpagefav = last;
            dispatch(getfavSuccess({ Home: { favlist: data } }));
            dispatch(homeRefreshResolve());
          } else {
            let arr = [...getState().entities.home.favorites];
            getState().entities.home.favorites = arr.concat(data);
            getState().entities.home.lastpagefav = last;
            dispatch(getfavSuccess({ Home: { favlist: data } }));
            dispatch(homeRefreshResolve());
          }
        } else {
        }
      })
      .catch((error) => {
        return dispatch(getfavFailure(error));
      });
  };
}

// My ads

function myadsRequest() {
  return {
    type: MY_ADS_REQUEST,
  };
}

function myadsSuccess() {
  return {
    type: MY_ADS_SUCCESS,
  };
}

function myadsFailure() {
  return {
    type: MY_ADS_FAILURE,
  };
}

export function getmyads(obj) {
  return (dispatch, getState) => {
    dispatch(myadsRequest());
    return axios
      .post(AppURLs.getmyads, obj)
      .then((response) => {
        if (response.data) {
          getState().entities.home.MyAds = response.data.data;
          dispatch(myadsSuccess());
        }
      })
      .catch((error) => {
        return dispatch(myadsFailure(error));
      });
  };
}

// Delete ads

function deleteadsRequest() {
  return {
    type: DELETEAD_REQUEST,
  };
}

function deleteadsSuccess() {
  return {
    type: DELETEAD_SUCCESS,
  };
}

function deleteadsFailure() {
  return {
    type: DELETEAD_FAILURE,
  };
}

export function deleteads(obj) {
  return (dispatch, getState) => {
    dispatch(deleteadsRequest());
    return axios
      .post(AppURLs.deletead, obj)
      .then((response) => {
        if (response.data) {
          dispatch(getmyads({ user_id: obj.user_id }));
          dispatch(deleteadsSuccess());
        }
      })
      .catch((error) => {
        debugger;
        return dispatch(deleteadsFailure(error));
      });
  };
}


export function setDeviceToken(data) {
  return (dispatch, getState) => {
    getState().entities.home.apptoken = data.token;
  };
}
