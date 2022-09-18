import axios from 'axios';

export const getProductsByCategory = async (category) => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://fakestoreapi.com/products/category/${category}`,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
