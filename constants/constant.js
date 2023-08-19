import React from 'react';
import { Platform } from 'react-native';
export const characterLimit = {
  password: 7,
};
export const API_ROOT = 'https://oldboyspot.com/oldboy_new/';
export const IMG_ROOT = 'https://oldboyspot.com/oldboy_new/storage/app/';

export const AppURLs = {
  Register: 'api/register',
  Login: 'api/login',
  Forget: 'api/forgetpassword',
  Reset: 'api/changepassword',
  ProfileEdit: 'api/editprofile',
  HomeFeed: 'api/homefeeds',
  HomeDetails: 'api/homefeeddetail',
  Categories: 'api/getcategories',
  SubCategories: 'api/getsubcategories',
  Aboutcompany: 'api/aboutcompany',
  EditCompany: 'api/editcompany',
  addFavorite: 'api/user/favourite/add',
  delFavorite: 'api/user/favourite/remove',
  getFavorite: 'api/user/favourite/list',
  createAd: 'api/user/ad/create',
  getmyads: 'api/user/ad/list',
  deletead: 'api/user/ad/remove',
  composemsg: 'api/user/message/send',
  fetchMsg: "api/user/product/chat",
  fetchUserMsg: "api/user/message/list",
  countrylist: "api/country/list",
  countrycode: "api/country-code/list",
  territoryList: "api/territory/list",
  terms: "api/terms",
  faq: "api/faq",
  privacy: "api/privacy",
};

export const USER_AUTH = 'USER_AUTH';

export class UserModel {

  constructor() {
    selectedUserType,
      isAdult,
      parentNameOrNum
  }

}

export const FacebookParams = (data) => {
  return {
    firstname: data.first_name,
    lastname: data.last_name,
    sociallogin: true,
    socialtype: "facebook",
    email: data.email,
    socialid: data.id
  }
}

export const GoogleParams = (data) => {
  return {
    firstname: data.givenName,
    lastname: data.familyName,
    sociallogin: true,
    socialtype: "google",
    email: data.email,
    socialid: data.id
  }
}

export const LoginParams = (email, password, pushToken, lang) => {
  return {
    email: email,
    password: password,
    device_type: Platform.OS,
    device_id: pushToken,
    lang: lang
  };
};

export const RegisterParams = (fname, lname, email, password, pushToken, language) => {
  return {
    fname: fname,
    lname: lname,
    email: email,
    password: password,
    c_password: password,
    device_type: Platform.OS,
    device_id: pushToken,
    lang: language
  };
};

export const ForgotParams = (email, lang) => {
  return {
    email: email,
    lang: lang
  };
};

export const ResetParams = (email, oldpassword, newpassword, cpassword, lang) => {
  return {
    email: email,
    old_password: oldpassword,
    password: newpassword,
    c_password: cpassword,
    lang: lang
  };
};

export const ProfileUpdateParams = (
  email,
  fname,
  lname,
  phone,
  profileImage,
  isd_code,
  lang
) => {
  return {
    email: email,
    fname: fname,
    lname: lname,
    phone: phone,
    profileimage: profileImage,
    isd_code: isd_code,
    lang: lang
  };
};

export const AdParams = (image, name) => {
  return {
    image: image,
    name: name,
    created_at: new Date().toDateString(),
  };
};

export const CompanyUpdateParams = (
  user_id,
  company,
  address,
  funct,
  about_company,
  city,
  country,
  pincode,
  company_logo,
  urgent_alert,
) => {
  return {
    user_id: user_id,
    company: company,
    address: address,
    function: funct,
    about_company: about_company,
    city: city,
    country: country,
    pincode: pincode,
    company_logo: company_logo,
    urgent_alert: urgent_alert,
  };
};
