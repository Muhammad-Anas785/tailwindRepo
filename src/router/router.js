import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import Day6WebLayoutHero from "@/TailwindComponents/Day6WebLayoutHero.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", component: Day6WebLayoutHero },
      { path: "about", component: () => import("@/TailwindComponents/Day6WebLayoutAbout.vue") },
      { path: "contact", component: () => import("@/TailwindComponents/Day6WebLayoutContact.vue") },
      { path: "blogs", component: () => import("@/TailwindComponents/Day5.1Blogs.vue") },
      { path: "projects", component: () => import("@/TailwindComponents/Day6WebLayoutProjects.vue") },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
