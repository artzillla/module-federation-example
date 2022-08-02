import productsData from './products.json';

export default {
  fetchAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData);
      }, 1500);
    });
  },
};
