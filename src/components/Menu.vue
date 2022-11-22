<template>
  <div class="outMenu">
    <div class="inMenu">
      <div class="bar">
        <span class="textBox">
          <router-link :to="{ name: 'Home' }" class="strong">
            <i class="far fa-newspaper"></i>
            AradığınCümle
          </router-link>
        </span>
        <span class="brace"></span>
        <span class="textBox">
          <router-link
            :to="{ name: 'NewsListCategory', params: { categorySlug: 'ekonomi', listType: 'son-yayinlananlar' } }">
            Ekonomi</router-link>
        </span>
        <span class="brace"></span>
        <span class="textBox">
          <router-link
            :to="{ name: 'NewsListCategory', params: { categorySlug: 'siyaset', listType: 'son-yayinlananlar' } }">
            Siyaset</router-link>
        </span>
        <span class="brace"></span>
        <span class="textBox">
          <router-link
            :to="{ name: 'NewsListCategory', params: { categorySlug: 'magazin', listType: 'son-yayinlananlar' } }">
            Magazin</router-link>
        </span>
        <span class="brace"></span>
        <span class="textBox">
          <router-link
            :to="{ name: 'NewsListCategory', params: { categorySlug: 'teknoloji', listType: 'son-yayinlananlar' } }">
            Teknoloji</router-link>
        </span>
      </div>
      <div class="bar">
        <section class="brace"></section>
        <span class="iconBox">
          <i class="fas fa-bars menuBtn" @click="toggleMenu"></i>
        </span>
        <section class="brace"></section>
        <span class="iconBox">
          <i class="fas fa-adjust themeBtn"></i>
        </span>
        <section class="brace"></section>
        <span class="iconBox">
          <i class="fas fa-search searchBtn"></i>
        </span>
        <section class="brace"></section>
        <span class="iconBox">
          <router-link :to="{ name: 'SignIn' }">
            <i class="fas fa-sign-in-alt"></i>
          </router-link>
        </span>
        <section class="brace"></section>
      </div>
      <div class="outFullLine" id="fullLine">
        <div class="inFullLine">
          <div class="search">
            <div class="outInputText">
              <input type="text" placeholder="Aradığın cümle ile ilgili birkaç kelime yazabilirsin" />
              <i class="fas fa-search"></i>
              <i class="fas fa-times closeSearch"></i>
            </div>
          </div>
          <div class="outTheme">
            <div class="inTheme">
              <label for="#">Tema:</label>
              <form method="POST" action="">
                <button class="active" name="websiteTheme" value="dark">
                  Koyu
                </button>
                <button name="websiteTheme" value="light">Açık</button>
              </form>
              <i class="fas fa-times closeTheme"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile_bar">
        <span class="iconBox">
          <i class="fas fa-bars mobilMenuBtn"></i>
        </span>
        <span class="logoBox">
          <router-link :to="{ name: 'Home' }" class="strong">
            <i class="far fa-newspaper"></i>
            AradığınCümle
          </router-link>
        </span>
        <span class="iconBox">
          <i class="fas fa-search mobilSearchBtn"></i>
        </span>
      </div>
    </div>
  </div>
  <div class="outDropdown">
    <div class="inDropdown">
      <div class="header">
        <div class="search">
          <div class="outInputText">
            <input type="text" placeholder="Aradığın Cümle İle İlgili Arama Yapabilirsin" />
            <div class="iconBox">
              <i class="fas fa-search cP"></i>
            </div>
          </div>
        </div>
        <div class="themeAndLinks">
          <div class="theme">
            <label for="#">Tema:</label>
            <form method="POST" action="#">
              <button class="active" name="websiteTheme" value="dark">
                Koyu
              </button>
              <button name="websiteTheme" value="light">Açık</button>
            </form>
          </div>
          <div class="linkBar">
            <span>
              <router-link :to="{ name: 'SignIn' }">Giriş Yap</router-link>
            </span>
          </div>
        </div>
      </div>
      <div class="lists">
        <div class="listsBar">
          <div class="outList">
            <div class="titleBox">
              <span>
                <router-link
                  :to="{ name: 'NewsListCategory', params: { categorySlug: 'ekonomi', listType: 'son-yayinlananlar' } }">
                  Ekonomi</router-link>
              </span>
            </div>
            <div class="list">
              <div class="item">
                <span>
                  <router-link
                    :to="{ name: 'NewsListCategory', params: { categorySlug: 'xxxxx', listType: 'son-yayinlananlar' } }">
                    xxxxx</router-link>
                </span>
              </div>
            </div>
          </div>
          <div class="outList">
            <div class="titleBox">
              <span>
                <router-link
                  :to="{ name: 'NewsListCategory', params: { categorySlug: 'siyaset', listType: 'son-yayinlananlar' } }">
                  Siyaset</router-link>
              </span>
            </div>
            <div class="list">
              <div class="item">
                <span>
                  <router-link
                    :to="{ name: 'NewsListCategory', params: { categorySlug: 'xxxxx', listType: 'son-yayinlananlar' } }">
                    xxxxx</router-link>
                </span>
              </div>
            </div>
          </div>
          <div class="outList">
            <div class="titleBox">
              <span>
                <router-link
                  :to="{ name: 'NewsListCategory', params: { categorySlug: 'magazin', listType: 'son-yayinlananlar' } }">
                  Magazin</router-link>
              </span>
            </div>
            <div class="list">
              <div class="item">
                <span>
                  <router-link
                    :to="{ name: 'NewsListCategory', params: { categorySlug: 'xxxxx', listType: 'son-yayinlananlar' } }">
                    xxxxx</router-link>
                </span>
              </div>
            </div>
          </div>
          <div class="outList">
            <div class="titleBox">
              <span>
                <router-link
                  :to="{ name: 'NewsListCategory', params: { categorySlug: 'teknoloji', listType: 'son-yayinlananlar' } }">
                  Teknoloji</router-link>
              </span>
            </div>
            <div class="list">
              <div class="item">
                <span>
                  <router-link
                    :to="{ name: 'NewsListCategory', params: { categorySlug: 'xxxxx', listType: 'son-yayinlananlar' } }">
                    xxxxx</router-link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="listsBar">
          <div class="outList">
            <div class="titleBox">
              <span>
                <router-link
                  :to="{ name: 'NewsListCategory', params: { categorySlug: 'oyun', listType: 'son-yayinlananlar' } }">
                  Oyun</router-link>
              </span>
            </div>
            <div class="list">
              <div class="item">
                <span>
                  <router-link
                    :to="{ name: 'NewsListCategory', params: { categorySlug: 'xxxxx', listType: 'son-yayinlananlar' } }">
                    xxxxx</router-link>
                </span>
              </div>
            </div>
          </div>
          <div class="outList">
            <div class="titleBox">
              <span>
                <router-link
                  :to="{ name: 'NewsListCategory', params: { categorySlug: 'sinema', listType: 'son-yayinlananlar' } }">
                  Sinema</router-link>
              </span>
            </div>
            <div class="list">
              <div class="item">
                <span>
                  <router-link
                    :to="{ name: 'NewsListCategory', params: { categorySlug: 'xxxxx', listType: 'son-yayinlananlar' } }">
                    xxxxx</router-link>
                </span>
              </div>
            </div>
          </div>
          <div class="outList">
            <div class="titleBox">
              <span>
                <router-link
                  :to="{ name: 'NewsListCategory', params: { categorySlug: 'spor', listType: 'son-yayinlananlar' } }">
                  Spor</router-link>
              </span>
            </div>
            <div class="list">
              <div class="item">
                <span>
                  <router-link
                    :to="{ name: 'NewsListCategory', params: { categorySlug: 'xxxxx', listType: 'son-yayinlananlar' } }">
                    xxxxx</router-link>
                </span>
              </div>
            </div>
          </div>
          <div class="outList">
            <div class="titleBox">
              <span>
                <router-link
                  :to="{ name: 'NewsListCategory', params: { categorySlug: 'sağlık', listType: 'son-yayinlananlar' } }">
                  Sağlık</router-link>
              </span>
            </div>
            <div class="list">
              <div class="item">
                <span>
                  <router-link
                    :to="{ name: 'NewsListCategory', params: { categorySlug: 'xxxxx', listType: 'son-yayinlananlar' } }">
                    xxxxx</router-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const menuBtn = document.querySelector(".menuBtn");
  const mobilMenuBtn = document.querySelector(".mobilMenuBtn");
  const searchBtn = document.querySelector(".searchBtn");
  const mobilSearchBtn = document.querySelector(".mobilSearchBtn");
  const themeBtn = document.querySelector(".themeBtn");
  const menu = document.querySelector(".outDropdown");
  const fullLine = document.querySelector(".outFullLine");
  const search = document.querySelector(".search");
  const theme = document.querySelector(".outTheme");
  const closeSearch = document.querySelector(".closeSearch");
  const closeTheme = document.querySelector(".closeTheme");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  mobilMenuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  searchBtn.addEventListener("click", () => {
    fullLine.classList.add("open");
    search.classList.add("open");
  });

  mobilSearchBtn.addEventListener("click", () => {
    fullLine.classList.add("open");
    search.classList.add("open");
  });

  closeSearch.addEventListener("click", () => {
    fullLine.classList.remove("open");
    search.classList.remove("open");
  });

  themeBtn.addEventListener("click", () => {
    fullLine.classList.add("open");
    theme.classList.add("open");
  });

  closeTheme.addEventListener("click", () => {
    fullLine.classList.remove("open");
    theme.classList.remove("open");
  });

  document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(menu.querySelector(".inDropdown"))) {
      if (menu.classList.contains("open")) {
        if (!e.composedPath().includes(menuBtn)) {
          if (!e.composedPath().includes(mobilMenuBtn)) {
            menu.classList.remove("open");
          }
        }
      }
    }
  });
});
</script>
