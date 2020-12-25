<template>
  <div class="container">
    <div class="top">产品管理</div>
    <div class="card">
      <div class="toolbar">
        <select v-model="form.catagory">
          <option v-for="(c, i) in catagories" :value="c" :key="i">
            {{ c }}
          </option>
        </select>
        <input type="text" placeholder="搜索" v-model="form.keyword" />
      </div>
      <table>
        <thead>
          <tr>
            <th v-for="(h, i) in headers" :key="i">{{ h }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(d, i) in datas_show" :key="i">
            <td v-for="(dd, ii) in Object.keys(d)" :class="dd" :key="ii">
              <div v-if="dd !== 'name'">
                {{ d[dd] }}
              </div>
              <div
                v-if="dd === 'name'"
                @click="display(i)"
                @mousemove="enter($event, i)"
                @mouseleave="leave"
              >
                {{ d[dd] }}
              </div>
            </td>
            <td>
              <div class="operations">
                <svg
                  @click="display(i)"
                  width="20"
                  height="20"
                  t="1608877949657"
                  class="icon"
                  viewBox="0 0 1371 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1157"
                >
                  <path
                    d="M680.48961895 429.58571365c-22.85645925 0-42.33609481 8.04478461-58.49187659 24.10124863-16.19550974 16.12267586-24.24691568 35.55596285-24.24691567 58.26675505 0 22.73065546 8.05140594 42.15070052 24.24691567 58.24689179 16.15578177 16.08956993 35.63541806 24.13435455 58.49187659 24.13435454 22.8432166 0 42.33609481-8.05140594 58.4918773-24.13435454 16.18226708-16.08956993 24.24691568-35.5162356 24.24691496-58.24027046 0-22.7107922-8.06464859-42.15070052-24.24691496-58.26675505-16.15578177-16.06308535-35.64865999-24.10786996-58.4918773-24.10786996z m0-82.36800369c45.69967512 0 84.68543155 16.07632728 117.04996571 48.30843707 32.31156427 32.16589723 48.48721002 71.01922928 48.48721003 116.48716152 0 45.47455358-16.18226708 84.35437023-48.48721003 116.51364685-32.36453417 32.21886712-71.35028988 48.30181573-117.04996571 48.30181574-45.69967512 0-84.68543155-16.08294861-117.04996499-48.30181573C531.12146836 596.36767949 514.93920127 557.48786286 514.93920127 512.01330855c0-45.46793298 16.18226708-84.3212643 48.50045269-116.48716152 32.36453417-32.23210978 71.35028988-48.3150584 117.04996499-48.3150584z m0-123.60497542c-30.1795307 0-59.80287852 3.97273307-88.92301339 11.93144186-29.10689293 7.89911829-55.35341708 18.15539096-78.67998337 30.70922896-23.41264138 12.55383727-46.22937338 27.75616302-68.5627557 45.56725074-22.30689772 17.79784504-41.62100225 35.29111407-57.88272382 52.61223146a748.49606107 748.49606107 0 0 0-47.35498104 55.65137251c-15.30164423 19.8438028-27.47807232 36.87358612-36.5160402 51.04962267a886.44922469 886.44922469 0 0 0-25.55129701 42.48838318 901.52574737 901.52574737 0 0 0 25.55129701 41.96530622c9.06445318 14.03699085 21.25412321 30.87475927 36.5160402 50.51992515a721.99792935 721.99792935 0 0 0 47.35498104 55.03559839c16.28820688 17.04302596 35.57582683 34.36414336 57.88272382 51.95673014 22.30689772 17.5925875 45.15011431 32.61614029 68.5627557 45.0441745 23.36629282 12.44789748 49.57309043 22.57836782 78.67998337 30.41789489a340.19839518 340.19839518 0 0 0 88.92301339 11.7460483 335.23247885 335.23247885 0 0 0 88.92301412-11.91819994c29.10689293-7.91236022 55.31368984-18.10242178 78.67336205-30.57680385 23.40602005-12.45451881 46.2624793-27.53104149 68.56937629-45.22294748 22.29365506-17.68528464 41.58127501-35.13220509 57.88272455-52.32089808a733.41291632 733.41291632 0 0 0 47.34173838-55.37328108c15.27515963-19.72462107 27.45820834-36.65508591 36.53590418-50.84436513a1008.02810633 1008.02810633 0 0 0 25.54467497-42.1771851 1008.36578899 1008.36578899 0 0 0-25.54467497-42.18380644c-9.07769585-14.18927922-21.26074454-31.15284998-36.52928284-50.87084973a735.61778378 735.61778378 0 0 0-47.34173839-55.34679647c-16.30807014-17.19531433-35.59569009-34.63561346-57.88934588-52.32089739-22.30689772-17.67866332-45.15673491-32.77504999-68.56937629-45.22294747-23.35967149-12.47438279-49.56646912-22.66444363-78.67336205-30.60328916a336.33822251 336.33822251 0 0 0-88.92301412-11.89171461v0.17877296z m0-82.40111032c45.03755317 0 88.85680156 6.81985849 131.41139658 20.43309157 42.55459502 13.59999044 79.89828818 31.31838099 111.99797356 53.09558118a762.86411324 762.86411324 0 0 1 90.71074371 72.27726131c28.29910324 26.37232793 52.13550309 52.79100442 71.40325978 79.17657429 19.31410526 26.43191916 36.01944856 50.50668247 50.13589462 72.29050396 14.12306667 21.78382076 24.55149171 39.41613551 31.21244121 52.95653473L1177.06141894 512.0530358c-1.50301755 3.20467133-3.5754599 7.54157237-6.13787328 13.03718698-2.5955193 5.49561461-8.67380136 16.65899473-18.27457342 33.46365652a864.33434259 864.33434259 0 0 1-30.74233416 49.89753044c-10.85880411 16.45373719-25.21361436 35.75459978-42.97835349 57.93569371a801.57177752 801.57177752 0 0 1-55.10181096 62.10706446c-18.96318067 19.21478678-41.46209327 38.58848255-67.41066272 58.07473944-26.00816069 19.50612087-52.61223146 36.09228172-79.88504552 49.73199941-27.2595714 13.63971768-57.92907311 24.80309853-91.95553382 33.47027856A422.03670131 422.03670131 0 0 1 680.44989171 882.78850832c-45.03755317 0-88.82369565-6.78675257-131.38491127-20.41984966-42.58107961-13.61323311-79.9115301-31.25878978-112.01121549-52.95653472a758.75895506 758.75895506 0 0 1-90.69750178-71.78729101c-28.35207314-26.12072181-52.188473-52.37386728-71.462851-78.69322532-19.28099862-26.29949477-35.97309999-50.26169768-50.12265124-71.93295804-14.129688-21.63153311-24.49852179-39.34992367-31.16609336-53.10220177L183.87809244 513.61564459c1.50301755-3.20467133 3.54235399-7.54157237 6.15773654-13.03718699 2.57565531-5.49561461 8.6605587-16.68548004 18.27457342-33.64242946a866.58555789 866.58555789 0 0 1 30.68936499-50.05643942c10.91177401-16.42063128 25.22023496-35.84729693 43.01145868-58.2468918a776.86137684 776.86137684 0 0 1 55.12829627-62.44474639c18.98304392-19.20154413 41.43560869-38.63483111 67.41066271-58.24689106 25.95519077-19.61205995 52.55926156-36.2710554 79.83207563-50.02995482 27.28605671-13.75889942 57.9555577-24.98187149 92.02836697-33.67553611A418.87837856 418.87837856 0 0 1 680.49624028 141.21162421z"
                    p-id="1158"
                    fill="#bfbfbf"
                  ></path>
                </svg>
                <svg
                  @click="edit(i)"
                  width="20"
                  height="20"
                  t="1608878030241"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2117"
                >
                  <path
                    d="M853.410909 930.909091H170.589091A77.730909 77.730909 0 0 1 93.090909 853.410909V170.589091A77.730909 77.730909 0 0 1 170.589091 93.090909H523.636364a34.909091 34.909091 0 0 1 0 69.818182H170.589091a7.68 7.68 0 0 0-7.68 7.68v682.821818a7.68 7.68 0 0 0 7.68 7.68h682.821818a7.68 7.68 0 0 0 7.68-7.68V477.090909a34.909091 34.909091 0 0 1 69.818182 0v376.32A77.730909 77.730909 0 0 1 853.410909 930.909091z"
                    p-id="2118"
                    fill="#bfbfbf"
                  ></path>
                  <path
                    d="M477.090909 581.818182a35.141818 35.141818 0 0 1-24.669091-10.24 34.676364 34.676364 0 0 1 0-49.338182l407.272727-407.272727a34.909091 34.909091 0 0 1 49.338182 49.338182l-407.272727 407.272727a35.141818 35.141818 0 0 1-24.669091 10.24z"
                    p-id="2119"
                    fill="#bfbfbf"
                  ></path>
                </svg>
                <svg
                  @click="delet(i)"
                  width="20"
                  height="20"
                  t="1608878090682"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3090"
                >
                  <path
                    d="M517.59 21.609c-100.299 0-181.703 79.514-185.167 179.34H98.603c-25.979 0-47.235 21.099-47.235 47.236 0 25.98 21.099 47.237 47.236 47.237h52.117v528.416c0 99.196 67.233 180.285 150.37 180.285h423.55c82.98 0 150.37-80.616 150.37-180.285V295.737h47.236c25.98 0 47.236-21.1 47.236-47.237 0-25.98-21.099-47.236-47.236-47.236H702.441C699.449 101.124 617.888 21.61 517.59 21.61z m-96.677 179.34c3.464-51.172 45.19-90.85 96.834-90.85s93.37 39.835 96.362 90.85H420.913z m-119.98 714.842c-29.444 0-61.88-37.789-61.88-91.953V295.737h547.311V824.31c0 54.007-32.436 91.954-61.88 91.954H300.933v-0.473z m0 0"
                    p-id="3091"
                    fill="#bfbfbf"
                  ></path>
                  <path
                    d="M364.387 802.267c21.57 0 39.363-21.571 39.363-48.653V476.022c0-27.082-17.635-48.654-39.363-48.654-21.572 0-39.364 21.572-39.364 48.654v277.592c0 26.924 17.32 48.653 39.364 48.653z m142.496 0c21.571 0 39.363-21.571 39.363-48.653V476.022c0-27.082-17.635-48.654-39.363-48.654-21.571 0-39.364 21.572-39.364 48.654v277.592c0 26.924 17.793 48.653 39.364 48.653z m149.896 0c21.571 0 39.364-21.571 39.364-48.653V476.022c0-27.082-17.635-48.654-39.364-48.654-21.571 0-39.363 21.572-39.363 48.654v277.592c0 26.924 17.162 48.653 39.363 48.653z m0 0"
                    p-id="3092"
                    fill="#bfbfbf"
                  ></path>
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="footbar">
        <div class="info">
          共{{ datas_filtered.length }}条记录,当前为{{
            (form.current_page - 1) * form.page_length
          }}-{{ form.current_page * form.page_length }}条
        </div>
        <div class="footer_operations">
          <select v-model="form.page_length">
            <option
              :value="v"
              v-for="v in form.page_length_selections"
              :key="v"
            >
              {{ v }}
            </option></select
          >条/页&nbsp;
          <button @click="form.current_page > 1 && form.current_page--">
            &lt;
          </button>
          <select v-model="form.current_page">
            <option
              v-for="n in Math.ceil(datas_filtered.length / form.page_length)"
              :key="n"
              :value="n"
            >
              {{ n }}
            </option>
          </select>
          <button @click="form.current_page++">&gt;</button>
        </div>
      </div>
    </div>
    <Modal
      :onCancle="onModalCancle"
      :onSave="onModalSave"
      :editable="modal.editable"
      v-show="modal.show"
      :values="modal.values"
    />
    <div class="tooltip_box" v-show="tooltip.show" :style="tooltip.pos">
      {{ tooltip.content }}
    </div>
  </div>
</template>

<script>
import Modal from "./modal";

export default {
  name: "P5",
  methods: {
    onModalCancle() {
      this.modal.show = false;
    },
    onModalSave(d) {
      let o = this.datas_src.findIndex((e) => e.id === d.id);
      this.datas_src[o] = { ...d };
      this.modal.show = false;
    },
    display(i) {
      this.modal.values = this.datas_show[i];
      this.modal.editable = false;
      this.modal.show = true;
    },
    edit(i) {
      this.modal.values = this.datas_show[i];
      this.modal.editable = true;
      this.modal.show = true;
    },
    delet(i) {
      let id = this.datas_show[i].id;
      let o = this.datas_src.findIndex((e) => e.id === id);
      this.datas_src.splice(o, 1);
    },
    //此处可以节流
    enter(e,i) {
      this.tooltip.show = true;
      this.tooltip.content=this.datas_show[i].tooltip;
      this.tooltip.pos = {
        left: e.clientX + 20 + "px",
        top: e.clientY + 20 + "px",
      };
    },
    leave() {
      this.tooltip.show = false;
    },
  },
  computed: {
    //过滤器
    datas_filtered() {
      let new_data = [];
      //计算分类
      if (this.form.catagory !== "全部品类") {
        for (let d of this.datas_src) {
          if (d.catagory === this.form.catagory) {
            new_data.push(d);
          }
        }
      } else {
        new_data.push(...this.datas_src);
      }
      //计算关键字
      let new_data1 = [];
      if (this.form.keyword !== "") {
        for (let d of new_data) {
          if (
            Object.values(d).some((e) => {
              return e.indexOf(this.form.keyword) !== -1;
            })
          ) {
            new_data1.push(d);
          }
        }
      } else {
        new_data1.push(...new_data);
      }
      return new_data1;
    },
    //分页器
    datas_show() {
      let start = (this.form.current_page - 1) * this.form.page_length,
        end = start + this.form.page_length;
      return this.datas_filtered.slice(start, end);
    },
  },
  //深度监听表单 如果出现不存在的页面就跳转到第一页
  watch: {
    form: {
      handler: function () {
        let start = (this.form.current_page - 1) * this.form.page_length;
        if (start >= this.datas_filtered.length) {
          this.form.current_page = 1;
        }
      },
      deep: true,
    },
  },
  data: function () {
    return {
      tooltip: {
        show: false,
        content: "苏泊尔",
        pos: {
          left: "0px",
          top: "0px",
        },
      },
      modal: {
        show: false,
        editable: true,
        values: {
          id: "",
          name: "",
          tooltip: "",
          catagory: "",
          model: "",
          function_interface: "",
        },
      },
      form: {
        catagory: "全部品类",
        keyword: "",
        current_page: 1,
        page_length: 5,
        page_length_selections: [2, 5, 10, 15, 20],
      },
      catagories: ["全部品类", "电压力锅", "电磁炉", "电饭煲"],
      headers: ["ID", "产品名称", "品类", "型号", "功能入口", "操作"],
      datas_src: [
        {
          id: "0098",
          name: "电压力锅 一锅双胆 一键排压 精准控温",
          tooltip: "苏泊尔efwef电热水壶，烫烫烫",
          catagory: "电饭煲",
          model: "CYSB450YCWM-100",
          function_interface: "5",
        },
        {
          id: "0198",
          name: "电热水壶  一键排压 精准壶  一键排压 精准壶  一键排压 精准控温",
          tooltip: "苏qer23rw泊尔电热水壶，烫烫烫",
          catagory: "电热水壶",
          model: "CYSB450YCWM-100",
          function_interface: "5",
        },
        {
          id: "0298",
          name: "电压力锅 一锅双胆 一键排压 精准控温",
          tooltip: "苏泊尔电热水壶，烫烫烫",
          catagory: "电压力锅",
          model: "CYSB450YCWM-100",
          function_interface: "5",
        },
        {
          id: "0398",
          name: "电压力锅 一锅双胆 一键排压 精准控温",
          tooltip: "苏泊尔电热水壶，烫烫烫",
          catagory: "电压力锅",
          model: "CYSB450YCWM-100",
          function_interface: "5",
        },
        {
          id: "01198",
          name: "电热水壶 一锅双胆 一键排压 精准控温",
          tooltip: "苏泊尔电gdgdfg热水壶，烫烫烫",
          catagory: "电热水壶",
          model: "CYSB450YCWM-100",
          function_interface: "5",
        },
        {
          id: "00923",
          name: "电热水壶 一锅双胆 一键排压 精准控温",
          tooltip: "苏泊尔电热werr44水壶，烫烫烫",
          catagory: "电热水壶",
          model: "CYSB450YCWM-100",
          function_interface: "5",
        },
        {
          id: "044398",
          name: "电压力锅 一锅双胆 一键排压 精准控温",
          tooltip: "苏泊尔电热水壶，烫烫烫",
          catagory: "电磁炉",
          model: "CYSB450YCWM-100",
          function_interface: "5",
        },
        {
          id: "0323298",
          name: " 一锅双胆 一键排压 精准控温",
          tooltip: "苏泊尔电热水壶，烫烫烫",
          catagory: "电压力锅",
          model: "CYSB450YCWM-100",
          function_interface: "5",
        },
        {
          id: "009238",
          name: "电压力锅 一锅双胆 一键排压 精准控温",
          tooltip: "苏泊尔电热水壶，烫烫烫",
          catagory: "电压力锅",
          model: "CYSB450YCWM-100",
          function_interface: "5",
        },
        {
          id: "023098",
          name: "电热水壶 一键排压 精准控温",
          tooltip: "苏泊尔电热水壶，烫烫烫",
          catagory: "电热水壶",
          model: "CYSB450YCWM-100",
          function_interface: "9",
        },
        {
          id: "00498",
          name: "电压力锅 一锅双胆 一键排压 精准控温",
          tooltip: "苏泊尔电热水壶，烫烫烫",
          catagory: "电压力锅",
          model: "CYSB450YCWM-100",
          function_interface: "5",
        },
        {
          id: "0054598",
          name: "电压力锅 一锅双胆 一键排压 精准控温",
          tooltip: "苏泊尔电热水壶，烫烫烫",
          catagory: "电磁炉",
          model: "CYSB450YCWM-100",
          function_interface: "5",
        },
        {
          id: "003398",
          name: "电压力锅 一键排压 精准控温",
          tooltip: "苏泊尔电热水壶，烫烫烫",
          catagory: "电磁炉",
          model: "CYSB450YCWM-100",
          function_interface: "8",
        },
      ],
    };
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
.container {
  background: RGB(237, 241, 245);
  color: #666;
  min-height: 600px;
  border: 1px solid cyan;
}
.top {
  background: #fff;
  font-size: 1.1rem;
  padding: 0.4em;
  font-weight: bold;
  box-shadow: 0 3px 4px -4px #666;
}

.card {
  background: #fff;
  margin: 0.5rem;
  box-shadow: 0px 0px 3px #666;
  padding: 0.5em 0;
}
.toolbar {
  display: flex;
  justify-content: flex-end;
  padding: 0.4em;
  padding-top: 0;
}
.tooltip {
  display: none;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tr {
  border-top: 1.5px solid #eee;
  border-bottom: 1.5px solid #eee;
}

tr:hover {
  background: rgba(9, 127, 143, 0.05);
}

td,
th {
  padding: 0.5em;
  text-align: left;
}

td:first-child,
th:first-child {
  padding-left: 0.4em;
}

td:nth-child(2) {
  color: RGB(130, 193, 211);
  cursor: pointer;
  max-width: 10em;
}

td div {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

td:nth-last-child(2),
th:nth-last-child(2) {
  text-align: right;
  padding-right: 1em;
}
td:nth-last-child(1),
th:nth-last-child(1) {
  text-align: center;
  padding-right: 0.5em;
}

svg {
  cursor: pointer;
}

svg:hover {
  filter: invert();
}

.footbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em;
}
.info {
  padding-left: 0.4em;
}

.footer_operations {
  user-select: none;
  padding-right: 0.4em;
  font-size: 0.8em;
}

select {
  border: 2px solid #eee;
  border-radius: 0.2em;
  padding: 0.5em;
  margin: 0 0.2em;
}

input {
  border: 2px solid #eee;
  border-radius: 0.2em;
  padding: 0.5em;
  margin-left: 0.4em;
}

button {
  color: #333;
  padding: 0.5em;
  background: #ccc;
  border: 2px solid #eee;
}

button:hover {
  background: #fff;
}

input:focus,
select:focus {
  border-color: #ccc;
}

.tooltip_box {
  position: fixed;
  background: #fff;
  border-radius: 0.2em;
  font-size: 0.8em;
  padding: 0.4em 1em;
  box-shadow: 0px 0px 3px #eee;
}
</style>