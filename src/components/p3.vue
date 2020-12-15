<template>
  <Table :headers="table.headers" :datas="table.datas"></Table>
  <br />
  <Chart :skills="chart"></Chart>
</template>
<script>
import Table from "./table";
import Chart from "./chart";

export default {
  name: "P3",
  data: function () {
    return {
      timer: null,
      table: {
        headers: ["1", "2", "3"],
        datas: [],
      },
      chart: [10, 20, 30, 40, 50, 60],
    };
  },
  components: {
    Chart,
    Table,
  },
  methods: {
    update() {
      let skills = [],
        datas = []
      for (let i = 0; i < 6; i++) {
        skills.push(Math.ceil(Math.random() * 100))
        let l = [];
        for (let i = 0; i < 3; i++) {
          l.push(Math.random().toString(36).slice(-8))
        }
        datas.push(l)
      }
      this.table.datas = datas;
      this.chart = skills;
    },
  },
  mounted() {
    this.update();
    this.timer = setInterval(() => {
      this.update()
    }, 1000)
  },
  unmounted() {
    clearInterval(this.timer)
    this.timer = null
  },
}
</script>

<style scoped>
</style>