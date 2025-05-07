import axios from "axios";

 const base_api_url = "http://127.0.0.1:8000/api/v1";

 //Route
 export default{
    //Auth
    getRegister:(data)=>axios.post(`${base_api_url}/auth/register`, data),
    getLogin:(data)=>axios.post(`${base_api_url}/auth/login`, data),
    getLogout:(token) =>axios.post(`${base_api_url}/auth/logout`,{},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      ),
    //Admin
    getUserAll:(token)=>axios.get(`${base_api_url}/admin/user`,{
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    ),
    getUserById:(token, id)=>axios.get(`${base_api_url}/admin/user/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    ),
    getUserUpdate:(token, data, id) =>axios.put(`${base_api_url}/admin/user/${id}`,data,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    ),
    //Categoria
    getCategoriaAll:(token)=>axios.get(`${base_api_url}/admin/categoria`,{
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    }
  ),
  getCategoriaStore:(token, data)=>axios.post(`${base_api_url}/admin/categoria`, data,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    }
  ),

 }