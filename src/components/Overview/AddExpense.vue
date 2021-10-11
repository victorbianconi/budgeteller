<template>
  <div class="add-expense">
      <click-button status="v1" icon="addIcon" text="Add Expense"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ClickButton from "@/components/input/ClickButton.vue";

@Component({
  components: {
    ClickButton
  }
})
export default class AddExpense extends Vue {
  // Props go here
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .add-expense {
   width: 90%;
   display: flex;
   align-items: center;
   margin-top: 3rem;
 }
</style>