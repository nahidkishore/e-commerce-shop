const initState = {
  products: [
    {
      id: 1,
      name: "man t-shirt summer season",
      image: "1.jpg",
      price: 20,
      discount: 2,
      discountPrice: 20 - (2 / 100) * 20,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
    },
    {
      id: 2,
      name: "woman jacket for summer",
      image: "2.jpg",
      price: 30,
      discount: 5,
      discountPrice: 30 - (5 / 100) * 30,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
    },
    {
      id: 3,
      name: "man trouser for all seasons",
      image: "3.jpg",
      price: 15,
      discount: 3,
      discountPrice: 15 - (3 / 100) * 15,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
    },
    {
      id: 4,
      name: "shoes for all season",
      image: "4.jpg",
      price: 50,
      discount: 4,
      discountPrice: 50 - (4 / 100) * 50,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
    },
    {
      id: 5,
      name: "female soot for summer",
      image: "5.jpg",
      price: 25,
      discount: 2,
      discountPrice: 25 - (2 / 100) * 25,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
    },
    {
      id: 6,
      name: "male jeans",
      image: "6.jpg",
      price: 60,
      discount: 6,
      discountPrice: 60 - (6 / 100) * 60,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
    },
    {
      id: 7,
      name: "male trouser for all seasons",
      image: "7.jpg",
      price: 35,
      discount: 2,
      discountPrice: 35 - (2 / 100) * 35,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
    },
    {
      id: 8,
      name: "male jacket for winter",
      image: "8.jpg",
      price: 80,
      discount: 7,
      discountPrice: 80 - (7 / 100) * 80,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
    },
    {
      id: 9,
      name: "male jacket for all season",
      image: "9.jpg",
      price: 95,
      discount: 4,
      discountPrice: 95 - (4 / 100) * 95,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
    },
    {
      id: 10,
      name: "male winter jacket",
      image: "10.jpg",
      price: 120,
      discount: 3,
      discountPrice: 120 - (3 / 100) * 120,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
    },
  ],
  product: {},
};

const ProductReducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };
    default:
      return state;
  }
};
export default ProductReducer;
