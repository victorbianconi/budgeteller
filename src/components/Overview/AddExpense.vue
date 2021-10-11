<template>
  <div class="add-expense">

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {}
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
   margin: 1rem 0rem;
 }
</style>