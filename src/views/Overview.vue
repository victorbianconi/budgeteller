<template>
  <div class="overview">
    <add-expense modalTitle="Add expense" modalSubtitle="To add an expense, create a new product or select an existing one." @closeModal="closeAddExpenseModal" v-if="isAddExpenseModal" />
    <page-title
      title="Overview"
      subtitle="Budgeteller tells you how much money you spend and how you can save more money."
    />
    <click-button @click="openAddExpenseModal" positioning="left" status="v1" icon="addIcon">
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

@Component({
  components: {
    AddExpense,
    PageTitle,
    OverviewStats,
    ClickButton,
  },
})
export default class Overview extends Vue {
  todaysDate: number = dayjs(new Date()).format("DD MMMM YYYY");
  isAddExpenseModal = false;

  openAddExpenseModal(){
    this.isAddExpenseModal = true
  }
  closeAddExpenseModal(){
    this.isAddExpenseModal = false
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
