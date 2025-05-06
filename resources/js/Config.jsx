import axios from "axios";

 const base_api_url = "http://127.0.0.1:8000/api/v1";

 //Route
 export default{
    //Auth
    getRegister:(data)=>axios.post(`${base_api_url}/auth/register`, data),
    getLogin:(data)=>axios.post(`${base_api_url}/auth/login`, data),
    getLogout:(token) =>axios.post(`${base_api_url}/auth/logout`,{}, // The request body is empty for logout in most cases
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      ),

 }