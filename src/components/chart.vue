<template>
  <v-echarts :option="opt" style="height: 250px; width: 250px" />
</template>

<script>
import { VEcharts } from "vue3-echarts";

export default {
  name: "Chart",
  props: ["skills"],
  computed: {
    opt() {
      return {
        radar: {
          indicator: [
            { name: "HTML", max: 100 },
            { name: "CSS", max: 100 },
            { name: "JS", max: 100 },
            { name: "React", max: 100 },
            { name: "Vue", max: 100 },
            { name: "Node", max: 100 },
          ],
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: this.skills||[],
              },
            ],
          },
        ],
      };
    },
  },
  components: {
    VEcharts,
  },
};
</script>

<style scoped>
</style>