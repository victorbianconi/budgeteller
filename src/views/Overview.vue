<template>
  <div class="overview">
    <page-title
      title="Overview"
      subtitle="Budgeteller tells you how much money you spend and how you can save more money."
    />
    <click-button positioning="left" status="v1" icon="addIcon" text="Add Expense"/>
    <overview-stats stats="stats" :todays-date="todaysDate" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageTitle from "@/components/PageTitle.vue"; // @ is an alias to /src
import OverviewStats from "@/components/Overview/OverviewStats.vue";
import dayjs from "dayjs";
import ClickButton from "@/components/input/ClickButton.vue";

@Component({
  components: {
    PageTitle,
    OverviewStats,
    ClickButton,
  },
})
export default class Overview extends Vue {
  todaysDate: number = dayjs(new Date()).format("DD MMMM YYYY");
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
