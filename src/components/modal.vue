<template>
  <div class="modal">
    <h4>编辑产品</h4>
    <div class="form_item">
      <label>ID:</label>
      <input
        :disabled="true"
        v-model="form.id"
        type="text"
        placeholder="请输入ID"
      />
    </div>
    <div class="form_item">
      <label>产品名称:</label>
      <input v-model="form.name" :disabled="!editable" type="text" placeholder="请输入产品名称" />
    </div>
    <div class="form_item">
      <label>品类:</label>
      <input v-model="form.catagory" :disabled="!editable" type="text" placeholder="请输入品类" />
    </div>
    <div class="form_item">
      <label>型号:</label>
      <input v-model="form.model" :disabled="!editable" type="text" placeholder="请输入型号" />
    </div>
    <div class="form_item">
      <label>功能入口:</label>
      <input v-model="form.function_interface" :disabled="!editable" type="text" placeholder="请输入功能入口" />
    </div>
    <div class="buttons">
      <button @click="onSave(form)">确定</button>
      <button @click="onCancle">取消</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  watch: {
    values: {
      handler(o) {
        this.form.id=o.id
        this.form.name=o.name
        this.form.tooltip=o.tooltip
        this.form.catagory=o.catagory
        this.form.model=o.model
        this.form.function_interface=o.function_interface
      },
      deep: true,
    },
  },
  data() {
    return {
      form: {
        id: "",
        name: "",
        tooltip: "",
        catagory: "",
        model: "",
        function_interface: "",
      },
    };
  },
  props: {
    onSave: {
      type: Function,
      default: null,
    },
    onCancle: {
      type: Function,
      default: null,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    values: {
      type: Object,
      default: null,
    },
  },
};
</script>
<style scoped>
.modal {
  position: fixed;
  z-index: 100;
  width: 40rem;
  height: 20rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: 1px 1px 1px 1px #ccc;
  padding: 1em;
}

.form_item {
  width: 50%;
  margin: 0.5em 0;
  display: inline-block;
}

label {
  display: inline-block;
  width: 5em;
}

input {
  border: 2px solid #eee;
  border-radius: 0.2em;
  padding: 0.3em;
  margin-left: 0.4em;
}
input:focus {
  border-color: #ccc;
}

.buttons {
  position: absolute;
  bottom: 0.5em;
  text-align: center;
  width: 100%;
}

button {
  color: #333;
  padding: 0.5em 1em;
  background: #ccc;
  border: 2px solid #eee;
  margin: 0.2em;
}
button:hover {
  background: #fff;
}
</style>