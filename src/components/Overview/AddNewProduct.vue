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
        <FormulateForm class="add-new-product__formulate-form">
          <div class="add-new-product__form__inputs">
            <h4 class="add-new-product__form__title">Product information</h4>
            <FormulateInput
              label-class="add-new-product__form__label"
              wrapper-class="add-new-product__form__wrapper"
              :input-class="
                (context, classes) =>
                  ['add-new-product__form__input'].concat(classes)
              "
              type="text"
              name="name"
              placeholder="Name (e.g. Eggs)"
            />
            <FormulateInput
              label-class="add-new-product__form__label"
              wrapper-class="add-new-product__form__wrapper"
              :input-class="
                (context, classes) =>
                  ['add-new-product__form__input'].concat(classes)
              "
              type="text"
              name="category"
              placeholder="Category (e.g. Groceries)"
            />
          </div>

          <div class="add-new-product__form__inputs">
            <h4 class="add-new-product__form__title">
              Transaction information
            </h4>
            <FormulateInput
              label-class="add-new-product__form__label"
              wrapper-class="add-new-product__form__wrapper"
              :input-class="
                (context, classes) =>
                  ['add-new-product__form__input'].concat(classes)
              "
              type="number"
              name="price"
              placeholder="Price (€)"
            />
            <FormulateInput
              label-class="add-new-product__form__label"
              wrapper-class="add-new-product__form__wrapper"
              :input-class="
                (context, classes) =>
                  ['add-new-product__form__input'].concat(classes)
              "
              type="text"
              name="quantity"
              placeholder="Quantity"
            />
          </div>

          <click-button status="v2--widthAuto"
            >Create product and add transaction</click-button
          >
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
<style lang="scss">
.add-new-product {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  &__form__inputs {
    margin: 0.5rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__formulate-form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  &__modal {
    margin-top: 25rem;
    width: 50%;
    height: auto;
    padding: 2rem 0rem;
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

  &__form {
    margin: 2rem 0rem;

    &__title {
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
      margin: 0.5rem 0rem;
    }

    &__wrapper {
      margin: 0.5rem 0rem;
    }

    &__label {
      font-size: 1.2rem;
      font-family: "Montserrat";
    }
    &__input {
      padding: 1rem 1rem;
      border: 0.2rem solid rgb(220, 220, 220);
      border-radius: 1rem;
      font-family: "MOntserrat";
      font-size: 1.3rem;
      background-color: transparent;
      transition: 0.2s ease-in-out;
      font-weight: 500;
      outline: none;

      &:focus {
        border-color: var(--main-color);
      }

      &:hover {
        box-shadow: 5px 5px 30px darkgrey;
        border-color: darkgrey;
      }
    }
    &__button {
      padding: 1rem 2rem;
      font-family: "MOntserrat";
      font-size: 1.3rem;
      font-weight: 500;
      border-radius: 1rem;
      border: none;
      margin-top: 1rem;
    }
  }
}

@keyframes fadeIn {
  from {
    transform: scale(0.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
