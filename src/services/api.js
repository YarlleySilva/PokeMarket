import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/type";

// type/8/ ou type/ghost/ = ghost
// type/16/ ou type/dragon/ = dragon


const api = axios.create({
  baseURL: baseUrl,
});

export default api;