import { Component } from "react";
import { ProductCard, Loading, Api } from "../../components";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    try {
      const products = await Api.get("https://fakestoreapi.com/products");
      this.setState({ products: products, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
            {this.state.products.map((product) => (
              <ProductCard key={product.id} item={product} className="" />
            ))}
          </div>
        )}
      </>
    );
  }
}
