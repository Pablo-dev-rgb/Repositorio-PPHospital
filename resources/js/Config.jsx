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
    getCategoriaAll:(token)=>axios.get(`${base_api_url}/admin/categoria`,
      {
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
    getCategoriaById:(token, id)=>axios.get(`${base_api_url}/admin/categoria/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    ),
    getCategoriaUpdate:(token, data, id) =>axios.put(`${base_api_url}/admin/categoria/${id}`,data,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    ),
    getCategoriaDeleteById:(token, id)=>axios.delete(`${base_api_url}/admin/categoria/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    ),
//Empresa
    getEmpresaAll:(token)=>axios.get(`${base_api_url}/admin/empresa`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    ),
    getEmpresaById:(token, id)=>axios.get(`${base_api_url}/admin/empresa/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    ),
    getEmpresaUpdate:(token, data, id) =>axios.put(`${base_api_url}/admin/empresa/${id}`,data,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    ),
//Client
//Empresa
    getEmpresaAllClient:(token)=>axios.get(`${base_api_url}/client/empresa`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    ),
    getEmpresaStoreClient:(token, data)=>axios.post(`${base_api_url}/client/empresa`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    ),
    getEmpresaByIdClient:(token, id)=>axios.get(`${base_api_url}/client/empresa/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    ),
    getEmpresaUpdateClient:(token, data, id) =>axios.put(`${base_api_url}/client/empresa/${id}`,data,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    ),
//Public
    getEmpresas:(data)=>axios.get(`${base_api_url}/public/empresas/${data}`),
    searchEmpresas:(data)=>axios.post(`${base_api_url}/public/empresas/search`, data),
    CategoriaAll:()=>axios.get(`${base_api_url}/public/categorias`),
    CategoriaBySlug:(slug)=>axios.get(`${base_api_url}/public/categorias/${slug}`)
}