import axios from 'axios';

export const getAllProducts = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://fakestoreapi.com/products',
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
