<template>
  <div class="overview">
    <add-expense
      modalTitle="Add expense"
      modalSubtitle="To add an expense, create a new product or select an existing one."
      @closeModal="closeAddExpenseModal"
      @createNewProduct="openAddNewProductModal"
      v-if="isAddExpenseModal"
    />
    <add-new-product
      modalTitle="Create a new product and add transaction"
      modalSubtitle="Type the product info below including product name and category."
      @closeModal="closeAddExpenseModal"
      @goBackToAddExpense="openAddExpenseModal"
      v-if="isAddNewProductModal"
    />
    <page-title
      title="Overview"
      subtitle="Budgeteller tells you how much money you spend and how you can save more money."
    />
    <click-button
      @click="openAddExpenseModal"
      positioning="left"
      containerWidthPercentage="90"
      status="v1"
      icon="addIcon"
    >
      Add Expense
    </click-button>
    <overview-stats stats="stats" :todays-date="todaysDate" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageTitle from "@/components/PageTitle.vue"; // @ is an alias to /src
import OverviewStats from "@/components/Overview/OverviewStats.vue";
import dayjs from "dayjs";
import ClickButton from "@/components/input/ClickButton.vue";
import AddExpense from "@/components/Overview/AddExpense.vue";
import AddNewProduct from "@/components/Overview/AddNewProduct.vue";

@Component({
  components: {
    AddNewProduct,
    AddExpense,
    PageTitle,
    OverviewStats,
    ClickButton,
  },
})
export default class Overview extends Vue {
  todaysDate: number = dayjs(new Date()).format("DD MMMM YYYY");
  isAddExpenseModal = false;
  isAddNewProductModal = false;

  openAddExpenseModal() {
    this.isAddExpenseModal = true;
    this.isAddNewProductModal = false;
  }
  closeAddExpenseModal() {
    this.isAddExpenseModal = false;
  }

  openAddNewProductModal() {
    this.isAddExpenseModal = false;
    this.isAddNewProductModal = true;
  }

  closeAddNewProductModal() {
    this.isAddNewProductModal = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.overview {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
}
</style>
