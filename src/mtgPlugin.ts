export default class MtgPlugin {
  name = "MTG Plugin";
  type = "product-source";
  category = "magic_the_gathering";
  fetchProducts = async () => {
    return [
      { id: 1, name: "Fog" },
      { id: 2, name: "Black Lotus" },
    ];
  };
}
