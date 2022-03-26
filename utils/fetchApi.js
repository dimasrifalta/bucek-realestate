import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'ef5857d1d5msh6611be9f9d326e0p138e76jsn9420dfaf47e8'
    }
  });
    
  return data;
}