import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://fakestoreapi.com/products?limit=5',
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
