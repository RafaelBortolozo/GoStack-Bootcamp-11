import axios from 'axios'

const api = axios.create({         // criacao de uma instancia do axios,
  baseURL: 'http://localhost:3333' // nele podemos passar a baseURL, a mesma contida no insomnia 

})

export default api