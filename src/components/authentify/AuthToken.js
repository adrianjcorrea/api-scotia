// import React from 'react';
var jwtDecode = require('jwt-decode');

//import decode from 'jwt-decode';


const all = {

isTokenExpired(token) {
   try {
       const decoded = jwtDecode(token);
       if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
           return true;
       }
       else
           return false;
   }
   catch (err) {
       return false;
   }
 },

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken && !this.isTokenExpired(this.getToken) // handwaiving here
  },

   setToken(idToken) {
    // Saves user token to localStorage

    localStorage.setItem('id_token', idToken);
  },

   setId(){
     //const load = this.getProfile()
     //localStorage.setItem('payload',JSON.stringify(load));
     const obj1 = [];
     const hi = this.getProfile();
     obj1.push(hi);
     var id = obj1[0].id;
     localStorage.setItem('id', id)
   }
,
  getId(){
     return localStorage.getItem('id');


  },

  getToken() {
       // Retrieves the user token from localStorage
       return localStorage.getItem('id_token');
   },
   getProfile() {
     // Using jwt-decode npm package to decode the token
      return jwtDecode(this.getToken());
  }


}

export default all;
