<template>
  <div class="overview-stats">
      <h3 class="overview-stats__todays-date">{{ todaysDate }}</h3>
      <div class="overview-stats__container">
          <OverviewStatsExpenses/>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import OverviewStatsExpenses from "@/components/Overview/OverviewStatsExpenses.vue";
@Component({
  components: {OverviewStatsExpenses}
})
export default class OverviewStats extends Vue {
  @Prop() private stats!: string;
  @Prop() private todaysDate!: Date;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.overview-stats {
  width: 90%;
  margin: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  &__container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 20vh;
    background-color: rgb(300,300,300);
    border: 0.3rem solid white;
    padding: 1rem;
    margin: 1rem 0rem;
    border-radius: 1rem;
    box-shadow: 5px 5px 23px -4px lightseagreen;
    cursor:pointer;
  }

  &__todays-date {
    font-size: 3rem;
    color: white;
    font-weight: 500;
    width: 100%;
  }
}
</style>
