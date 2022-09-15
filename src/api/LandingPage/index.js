import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://fakestoreapi.com/products?limit=4',
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
