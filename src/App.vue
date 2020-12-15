<template>
<nav>
      <router-link to="/P1">简历</router-link>|
      <router-link to="/P2">项目</router-link>|
      <router-link to="/P3">动态</router-link>
</nav>
<router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: "微软雅黑","Microsoft YaHei",Consolas,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  max-width: 20cm;
  padding: 0.25cm;
  margin: auto;
}

nav{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

nav a{
  margin: 0 0.2em;
  color:inherit;
  font-size: larger;
  font-weight: bolder;
  text-decoration: none;
  transition: color 0.3s ease-in-out 0s;
}

nav a:first-child{
  margin-left: 0;
}

nav a:hover{
  color: blue;
  transition: color 0.3s ease-in-out 0s;
}

</style>
