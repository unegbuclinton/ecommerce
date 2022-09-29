import axios from 'axios';

export const singleProduct = async (id) => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://fakestoreapi.com/products/${id}`,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
