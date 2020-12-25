import { createWebHistory, createRouter } from "vue-router";
import P1 from "./p1.vue";
import P2 from "./p2.vue";
import P3 from "./p3.vue";
import P4 from "./p4.vue";
import P5 from "./p5.vue";

const routes = [
    {
      path: "/",
      redirect:"/P1",
    },
    {
      path: "/P1",
      name: "P1",
      component: P1,
    },
  {
    path: "/P2",
    name: "P2",
    component: P2,
  },
  {
    path: "/P3",
    name: "P3",
    component: P3,
  },
  {
    path: "/P4",
    name: "P4",
    component: P4,
  },
  {
    path: "/P5",
    name: "P5",
    component: P5,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;