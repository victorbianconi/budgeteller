<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">

* {
  padding: 0rem;
  margin: 0rem;
  box-sizing: border-box;
}

p, h1, h2, h3, a {
  font-family:'Montserrat'
}

body {
  background-color: #031a2e ;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
