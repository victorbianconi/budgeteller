<template>
  <div class="overview-stats-expenses">
    <h4 class="overview-stats-expenses__title">Total expenses</h4>
    <p class="overview-stats-expenses__number">
      ${{ transactions.totalSpent }}
    </p>
    <p>Total products: {{ products.getProducts.length }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import productsState from "@/store/modules/products";
import { getModule } from "vuex-module-decorators";
import transactionsState from "@/store/modules/transactions";

@Component
export default class OverviewStatsExpenses extends Vue {
  @Prop() private stats!: string;
  @Prop() private todaysDate!: Date;
  products: productsState = getModule(productsState);
  transactions: transactionsState = getModule(transactionsState);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.overview-stats-expenses {
  &__title {
    font-size: 1.6rem;
    color: var(--main-color);
  }
  &__number {
    font-size: 1.9rem;
  }
}
</style>
