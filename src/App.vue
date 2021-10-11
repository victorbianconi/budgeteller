<template>
  <div id="app">
    <div class="nav">
      <div>
        <h1 class="nav__logo">budgeteller</h1>
      </div>
      <div>
        <router-link to="/">Overview</router-link>
        <router-link to="/settings">Settings</router-link>
      </div>
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

html {
  font-size: 67.5%;
}

p,
h1,
h2,
h3,
h4,
a {
  font-family: "Montserrat";
}

body {

  background-color: var(--main-color);
  --main-color: #073b4c;
  --darker-blue:#EEE2DF;
}

.nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    color: white;
    margin: 0rem 1rem;
    font-weight: 600;
    user-select: none;
  }

  a {
    margin: 0rem 1rem;
    font-weight: bold;
    color: black;
    padding: 1rem 2rem;
    background-color: white;
    border-radius: 1rem;
    text-decoration: none;
    font-size: 1.4rem;
    transition: 0.25s ease-in-out;
    font-weight: 500;

    &:hover {
      box-shadow: 0px 0px 30px -4px grey;
    }

    &.router-link-exact-active {
      color: var(--main-color);
      box-shadow: 0px 0px 30px -4px grey;
    }
  }
}
</style>
