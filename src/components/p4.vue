<template>
  <div class="container">
    <ul>
      <li v-for="(d, i) in datas" @click="listItemClick" :key="i">
        <!-- 列表内容 -->
        {{ d }} 
        <!-- 悬浮框 使用if避免渲染大量dom节点-->
        <div v-if="shows[i]" class="pop" :style="popStyle">{{ d }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "P2",
  methods: {
    listItemClick(e) {
        let li=e.target
        //只允许相应li的事件
        if(e.target.tagName==="DIV")
            return
        //根据InnerText判断要显示哪个悬浮框
        this.shows=[]
        this.shows[parseInt(li.innerText.substr(-1,1))-1]=true
        //计算列表项的中点
        const rect=li.getBoundingClientRect()
        const mid=rect.top+rect.height/2
        //根据列表项中点计算弹出框顶点和底点 若顶点<0 则贴到顶边 底点反之 如果使用的非像素高度 则使用getComputed机型实际值计算
        const popTop=mid-75
        const popBottom=mid+75
        if(popTop<0){
            this.popStyle.top=-popTop+"px"
        }else if(popBottom>window.innerHeight){
            this.popStyle.top=-(popBottom-window.innerHeight)+"px"
        }else{
            this.popStyle.top="0px"
        }
    },
  },
  data: function () {
    return {
      datas: [
        "Line1",
        "Line2",
        "Line3",
        "Line4",
        "Line5",
        "Line6",
        "Line7",
        "Line8",
        "Line9",
      ],
      shows:[],
      popStyle:{
          top:"0px",
      }
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul li {
  height: 15vh;
  display: flex;
  align-items: center;
  border: 1px solid black;
}

.pop {
  background: red;
  position: relative;
  width: 150px;
  height: 150px;
  left: 80px;
}

.pop::before {
  display: block;
  content: " ";
  border-width: 8px 8px 8px 8px;
  border-style: solid;
  border-color: transparent red transparent transparent;
  position: absolute;
  left: -16px;
  top: 43%;
}
</style>