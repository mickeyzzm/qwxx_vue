import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/PoliceForce",
  },
  {
    path: "/SituationIndex",
    name: "SituationIndex",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/SituationIndex/PageIndex.vue"
      ),
  },
  {
    path: "/PoliceForce",
    name: "PoliceForce",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/PoliceForce/PageIndex.vue"
      ),
  },
  {
    path: "/TargetPeople",
    name: "TargetPeople",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/TargetPeople/PageIndex.vue"
      ),
  },
  {
    path: "/TargetLoaction",
    name: "TargetLoaction",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/TargetLoaction/PageIndex.vue"
      ),
  },
  {
    path: "/PointWarning",
    name: "PointWarning",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/PointWarning/PageIndex.vue"
      ),
  },
  {
    path: "/DutyMinitor",
    name: "DutyMinitor",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/DutyMinitor/PageIndex.vue"
      ),
  },
  {
    path: "/MajorEvent",
    name: "MajorEvent",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/MajorEvent/PageIndex.vue"
      ),
  },
  {
    path: "/DataCenter",
    name: "DataCenter",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/DataCenter/PageIndex.vue"
      ),
  },
  {
    path: "/EventHandle",
    name: "EventHandle",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/EventHandle/PageIndex.vue"
      ),
  },
  {
    path: "/CollaCommand",
    name: "CollaCommand",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/CollaCommand/PageIndex.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
