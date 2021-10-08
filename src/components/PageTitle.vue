<template>
  <div class="page-title__container">
    <h1 class="page-title__title">{{ title }}</h1>
    <h2 class="page-title__subtitle">{{ subtitle }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PageTitle extends Vue {
  @Prop() private title!: string;
  @Prop() private subtitle!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.page-title__container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 90%;
}

<<<<<<< Updated upstream
.page-title__title {
  font-size: 3rem;
  color: white;
  margin: 0.3rem 0rem;
}
=======
  &__title {
    font-size: 4.5rem;
    color: white;
    margin: 0.3rem 0rem;
  }

  &__subtitle {
    font-size: 1.7rem;
    color: white;
    font-weight: 400;
    margin: 0.3rem 0rem;
  }
>>>>>>> Stashed changes

.page-title__subtitle {
  font-size: 1rem;
  color: white;
  font-weight: 400;
  margin: 0.3rem 0rem;
}

</style>
