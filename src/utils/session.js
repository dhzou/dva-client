

import {authInfo}  from '../services/service';
const URI = require('urijs');
const LOGIN_COOKIE_NAME = 'openId'

export function isAuthenticated () {
  return _getCookie(LOGIN_COOKIE_NAME)
}

export function authenticateSuccess (token) {
  _setCookie(LOGIN_COOKIE_NAME, token)
}

export function logout () {
  _setCookie(LOGIN_COOKIE_NAME, '', 0)
}

function _getCookie (name) {
  let start, end
  if (document.cookie.length > 0) {
    start = document.cookie.indexOf(name + '=')
    if (start !== -1) {
      start = start + name.length + 1
      end = document.cookie.indexOf(';', start)
      if (end === -1) {
        end = document.cookie.length
      }
      return unescape(document.cookie.substring(start, end))
    }
  }
  return null
}

export function wechatAuth() {
  const uri = new URI(document.location.href);
  const query = uri.query(true);
  const {code} = query;
  if(code) {
    authInfo({code:code,appid:"wxa8980d28e4a9d7a2"}).then(data=>{
      alert(JSON.stringify(data));
      authenticateSuccess("sss")
    })
     return true;
  } else {
      document.location = generateGetCodeUrl(document.location.href);
  }
}
function generateGetCodeUrl(redirectURL) {
  return new URI("https://open.weixin.qq.com/connect/oauth2/authorize")
      .addQuery("appid", 'wxa8980d28e4a9d7a2')
      .addQuery("redirect_uri", redirectURL)
      .addQuery("response_type", "code")
      .addQuery("scope", "snsapi_userinfo")
      .addQuery("response_type", "code")
      .hash("wechat_redirect")
      .toString();
};

function _setCookie (name, value, expire) {
  let date = new Date()
  date.setDate(date.getDate() + expire)
  document.cookie = name + '=' + escape(value) + '; path=/' +
    (expire ? ';expires=' + date.toGMTString() : '')
}