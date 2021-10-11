<template>
  <button
    v-if="!routerLink"
    :class="['btn', `btn--${status}`]"
    :disabled="status === 'disabled'"
    aria-pressed="true"
    @click="clickButton"
  >
    <span v-if="text" class="btn__text">{{ text }}</span>
    <component :is="icon" :class="`btn__icon ${icon}`" :alt="`${icon}-icon`" />
  </button>
  <router-link v-else :class="[`btn--${status}`, 'btn link']" :to="routerLink">
    <span class="btn__text" @click="clickButton"><slot></slot></span>
    <component
      :is="icon"
      v-if="icon"
      :class="`btn__icon ${icon}`"
      :alt="`${icon}-icon`"
      @click="clickButton"
    />
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Location } from "vue-router";
// available icons
import addIcon from "@carbon/icons-vue/es/add/32";

@Component({
  name: "ClickButton",
  components: {
    addIcon,
  },
})
export default class ClickButton extends Vue {
  @Prop({ required: false, default: "" }) icon!: string;
  @Prop({ required: false, default: "" }) text!: string;
  @Prop({ required: false, default: "" }) routerLink!: Location;
  @Prop({ required: false, default: "" }) status!: string;

  clickButton(event: Event) {
    this.$emit("click", event);
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  border-radius: 1rem;
  padding: 0.8rem 2rem;
  font-weight: 600;
  font-size: 1.4rem;
  cursor: pointer;

  &--v1 {
    background-color: transparent;
    color: white;
    border: 0.2rem solid white;
    transition: 0.25s ease-in-out all;

    &:hover {
      background-color: var(--darker-blue);
      color: var(--main-color);
      border: 0.2rem solid var(--main-color);
    }

  }

}
</style>
