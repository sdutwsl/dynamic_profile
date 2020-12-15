<template>
  <section>
    <ol>
        <li>{{name}}</li>
        <li>{{birth}}</li>
        <li>{{gender}}</li>
        <li><a :href="'mailto://'+email">{{email}}</a></li>
        <li>{{location}}</li>
        <li>{{edu}}</li>
        <li>{{exp}}</li>
    </ol>
  </section>
  <section>
      <Chart :skills="[60, 75, 70, 75, 65, 40]" />
  </section>
</template>

<script>

import Chart from './chart'

export default {
  name: "P1",
  data: function () {
    return {
        name:"王顺来",
        birth:"1997年7月",
        gender:"男",
        location:"上海",
        edu:"本科",
        exp:"小于一年",
        email:"sdutwsl@gmail.com",
    };
  },
  components:{
      Chart
  }
};
</script>

<style scoped>
section ol{
    list-style-type: none;
}

section ol li{
    margin: 0.2em;
    margin-left: 0;
}
</style>