<template>
  <div class="settings">
    <PageTitle title="Settings" subtitle="Select and edit your preferences." />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageTitle from "@/components/PageTitle.vue"; // @ is an alias to /src

@Component({
  components: {
    PageTitle,
  },
})
export default class Settings extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.settings {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
