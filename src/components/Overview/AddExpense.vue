<template>
  <div class="add-expense">
    <div class="add-expense__modal">
      <click-button
        @click="$emit('closeModal')"
        icon="closeIcon"
        status="back"
        positioning="absolute"
      ></click-button>
      <h3 class="add-expense__title">{{ modalTitle }}</h3>
      <p class="add-expense__subtitle" @click="$emit('closeModal')">
        {{ modalSubtitle }}
      </p>
      <div class="add-expense__buttons-container">
        <click-button
          containerWidthPercentage="90"
          @click="$emit('createNewProduct')"
          status="v2"
          positioning="center"
          >New Product</click-button
        >
        <click-button
          containerWidthPercentage="90"
          status="v2"
          positioning="center"
          >Existing Product</click-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import OverviewStatsExpenses from "@/components/Overview/OverviewStatsExpenses.vue";
import ClickButton from "@/components/input/ClickButton.vue";
@Component({
  components: { ClickButton },
})
export default class AddExpense extends Vue {
  @Prop() private modalTitle!: string;
  @Prop() private modalSubtitle!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.add-expense {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  &__modal {
    margin-top: 25rem;
    width: 80%;
    height: auto;
    padding: 4rem 0rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 15px 15px 135px black;
    animation: scaleUp 0.2s ease forwards;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
    margin-top: 1rem;
  }

  &__subtitle {
    font-size: 1.5rem;
    margin: 1rem 0rem;
    text-align: center;
    width: 90%;
    line-height: 2.3rem;
  }

  &__buttons-container {
    display: flex;
    width: 90%;
    justify-content: space-around;
  }
  &__button {
    display: flex;
    justify-content: center;
    border: none;
    background-color: var(--main-color);
  }
}

@keyframes scaleUp {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
