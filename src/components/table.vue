<template>
  <table>
    <thead>
      <tr>
        <th v-for="(h, i) in headers" :key="i">{{ h }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr, i) in datas" :key="i">
        <td v-for="(td, ii) in tr" :key="ii">{{ td }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: ["headers", "datas"],
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 0.5em;
}

th,
td {
  border: 1px solid #333;
  padding: 0.2em;
}
</style>