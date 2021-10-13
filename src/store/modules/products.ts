///gives no error
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";

@Module({ dynamic: true, store, name: "productsState" })
export default class productsState extends VuexModule {
  products: {
    name: string;
    category: string;
  }[] = this.getStoredProducts || [];

  @Action({ commit: "CREATE_PRODUCT" })
  async createProduct(product: { name: string; category: string }) {
    return product;
  }

  get getProducts() {
    return this.products;
  }

  get getStoredProducts() {
    const products = localStorage.getItem("vuex");
    if (products) {
      const productsObject = JSON.parse(products);
      return productsObject.productsState.products;
    } else {
      return this.products;
    }
  }

  @Mutation
  CREATE_PRODUCT(product: { name: string; category: string }): void {
    this.products = [...this.products, product];
  }
}
