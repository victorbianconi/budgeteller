<template>
  <div class="add-new-product">
    <div class="add-new-product__modal">
      <click-button
        @click="$emit('goBackToAddExpense')"
        icon="arrowBackIcon"
        status="back"
        positioning="absolute"
      ></click-button>
      <h3 class="add-new-product__title">{{ modalTitle }}</h3>
      <p class="add-new-product__subtitle" @click="$emit('closeModal')">
        {{ modalSubtitle }}
      </p>
      <div class="add-new-product__form">
        <FormulateForm>
          <h4 class="add-new-product__form__title">Product information</h4>
          <FormulateInput
            label-class="add-new-product__form__label"
            :input-class="(context, classes) => ['add-new-product__form__input'].concat(classes)"
            type="text"
            name="name"
            label="Name"
          />
          <FormulateInput type="text" name="email" label="Category" />
          <h4 class="add-new-product__form__title">Transaction information</h4>
          <FormulateInput type="number" name="price" label="Price" />
          <FormulateInput type="number" name="quantity" label="Quantity" />
          <FormulateInput
            type="submit"
            label="Create new product and add transaction"
          />
        </FormulateForm>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ClickButton from "@/components/input/ClickButton.vue";
import VueFormulate from "@braid/vue-formulate";

Vue.use(VueFormulate);

@Component({
  components: { ClickButton },
})
export default class AddNewProduct extends Vue {
  @Prop() private modalTitle!: string;
  @Prop() private modalSubtitle!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.add-new-product {
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
    animation: fadeIn 0.1s ease forwards;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  &__title {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
    margin-top: 1rem;
  }

  &__subtitle {
    font-size: 1.5rem;
    margin: 0.2rem 0rem;
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
  &__form {
    margin: 1rem 0rem;

    &__title {
      font-size: 1.4rem;
    }

    &__label {
      font-size: 1.2rem;
      font-family: "Montserrat";
    }
    &__input {
      padding: 1rem 1rem;
      border: none;
      border-radius: 1rem;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
