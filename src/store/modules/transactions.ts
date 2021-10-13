///gives no error
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";

@Module({ dynamic: true, store, name: "transactionsState" })
export default class transactionsState extends VuexModule {
  transactions: {
    product: string;
    price: number;
    quantity: number;
    date: Date;
  }[] = this.getStoredTransactions || [];

  @Action({ commit: "CREATE_TRANSACTION" })
  async createTransaction(transaction: {
    product: string;
    price: number;
    quantity: number;
    date: Date;
  }) {
    return transaction;
  }

  get getTransactions() {
    return this.transactions;
  }

  get totalSpent() {
    let total = 0;
    if (this.transactions.length) {
      this.transactions.forEach((transaction) => {
        total += Number(transaction.price) * transaction.quantity;
      });
      return total.toFixed(2);
    }
    return 0;
  }

  get getStoredTransactions() {
    const vueStore = localStorage.getItem("vuex");
    if (vueStore) {
      const transactionsObject = JSON.parse(vueStore);
      if (transactionsObject.transactionsState)
        return transactionsObject.transactionsState.transactions;
    } else {
      return this.transactions;
    }
  }

  @Mutation
  CREATE_TRANSACTION(transaction: {
    product: string;
    price: number;
    quantity: number;
    date: Date;
  }): void {
    this.transactions = [...this.transactions, transaction];
  }
}
