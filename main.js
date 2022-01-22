const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inventory: 0,
      onSale: true,
      details: ["50% cotton", "30% wool", "10% polyester"],
      sizes: ["S", "M", "L"],
      variants: [
        {
          id: 2234,
          color: "green",
        },
        {
          id: 2235,
          color: "blue",
        },
      ],
    };
  },
});
