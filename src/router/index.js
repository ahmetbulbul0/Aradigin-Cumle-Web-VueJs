import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Visitor Routes
    {
      name: "Home",
      path: "/",
      component: () => import("../views/visitor/HomeView.vue"),
    },
    {
      path: "/haberler",
      children: [
        {
          name: "NewsList",
          path: ":listType/:page?",
          component: () => import("../views/visitor/NewsListView.vue"),
        },
        {
          name: "NewsListAuthor",
          path: "yazar/:authorUserName/:listType/:page?",
          component: () => import("../views/visitor/NewsListView.vue"),
        },
        {
          name: "NewsListResourcePlatform",
          path: "kaynak/:resourcePlatformSlug/:listType/:page?",
          component: () => import("../views/visitor/NewsListView.vue"),
        },
        {
          name: "NewsListCategory",
          path: "kategori/:categorySlug/:listType/:page?",
          component: () => import("../views/visitor/NewsListView.vue"),
        },
      ],
    },
    {
      name: "NewsDetail",
      path: "/haber/:newsSlug",
      component: () => import("../views/visitor/NewsDetailView.vue"),
    },
    {
      name: "SignIn",
      path: "/giris-yap",
      component: () => import("../views/visitor/SignInView.vue"),
    },
    // Error Routes
    {
      name: "Error",
      path: "/hata/:errorCode",
      component: () => import("../views/error/ErrorView.vue"),
    },
    // Admin Routes
    {
      name: "Dashboard",
      path: "/:name-paneli/",
      component: () => import("../views/admin/DashboardView.vue"),
    },
  ],
});

export default router;
