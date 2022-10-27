import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("../views/HomeView.vue"),
    },
    {
      name: "NewsDetail",
      path: "/haber/:newsSlug",
      component: () => import("../views/NewsDetailView.vue"),
    },
    {
      path: "/haberler",
      children: [
        {
          name: "NewsList",
          path: ":listType/:page?",
          component: () => import("../views/NewsListView.vue"),
        },
        {
          name: "NewsListAuthor",
          path: "yazar/:authorUserName/:listType/:page?",
          component: () => import("../views/NewsListView.vue"), // DEĞİŞTİR
        },
        {
          name: "NewsListResourcePlatform",
          path: "kaynak/:resourcePlatformSlug/:listType/:page?",
          component: () => import("../views/NewsListView.vue"), // DEĞİŞTİR
        },
        {
          name: "NewsListCategory",
          path: "kategori/:categorySlug/:listType/:page?",
          component: () => import("../views/NewsListView.vue"), // DEĞİŞTİR
        },
      ],
    },
    {
      name: "SignIn",
      path: "/giris-yap",
      component: () => import("../views/SignInView.vue"),
    },
  ],
});

export default router;
