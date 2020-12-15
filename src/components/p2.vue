<template>
  <Table :headers="headers" :datas="datas"></Table>
</template>

<script>
import Table from "./table";

export default {
  name: "P2",
  data: function () {
    return {
      headers: ["名称", "时间", "简介"],
      datas: [
        ["某某数据平台移动端", "2020/08 - 2020/09", "是一个PWA，是一个可以查看实时、历史机器状态与数据的报表系统。"],
        ["数据平台内部版本", "2020/08 - 2020/12", "这是一个物联网报表统计系统，UI比较忙，所以从简搭建了。  "],
        ["天气预报", "2019/07 - 2019/07", "用Electron开发的跨平台天气桌面客户端，理论上支持Windows、Linux与OS X。"],
        ["道个顺租务管理平台", "2020/02 - 2020/05", "这是一个个人项目，大学毕业设计。"],
      ],
    };
  },
  components: {
    Table,
  },
};
</script>

<style scoped>
</style>