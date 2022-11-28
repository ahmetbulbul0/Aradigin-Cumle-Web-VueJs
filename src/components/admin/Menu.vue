<template>
    <div class="outMenu">
        <div class="inMenu">
            <div class="bar">
                <span class="textBox">
                    <router-link :to="{ name: 'Dashboard' }" class="strong">
                        <i class="far fa-newspaper"></i>
                        {{ title }}
                    </router-link>
                </span>
                <span class="brace"></span>
                <span class="textBox">
                    <router-link :to="{ name: 'Categories' }">Kategoriler</router-link>
                </span>
                <span class="brace"></span>
                <span class="textBox">
                    <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                </span>
                <span class="brace"></span>
                <span class="textBox">
                    <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                </span>
                <span class="brace"></span>
                <span class="textBox">
                    <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                </span>
            </div>
            <div class="bar">
                <section class="brace"></section>
                <span class="iconBox">
                    <i class="fas fa-bars menuBtn"></i>
                </span>
                <section class="brace"></section>
                <span class="iconBox">
                    <i class="fas fa-adjust themeBtn"></i>
                </span>
                <section class="brace"></section>
                <span class="iconBox">
                    <a href="#">
                        <i class="fas fa-cog"></i>
                    </a>
                </span>
                <section class="brace"></section>
                <span class="iconBox">
                    <a href="" target="blank">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </span>
                <section class="brace"></section>
                <span class="iconBox">
                    <a href="">
                        <i class="fas fa-sign-out-alt"></i>
                    </a>
                </span>
                <section class="brace"></section>
            </div>
            <div class="outFullLine" id="fullLine">
                <div class="inFullLine">
                    <div class="search" id="fullLineSearch">
                        <div class="outInputText">
                            <input type="text" placeholder="Aradığın cümle ile ilgili birkaç kelime yazabilirsin">
                            <i class="fas fa-search"></i>
                            <i class="fas fa-times closeSearch"></i>
                        </div>
                    </div>
                    <div class="outTheme" id="fullLineTheme">
                        <div class="inTheme">
                            <label for="#">Tema:</label>
                            <form method="POST" action="">
                                <button class='active' name="dashboardTheme" value="dark">Koyu</button>
                                <button name="dashboardTheme" value="light">Açık</button>
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
                    <a href="">
                        <i class="far fa-newspaper"></i>
                        SistemPaneli
                    </a>
                </span>
                <span class="iconBox">
                    <i class="fas fa-search mobilSearchBtn"></i>
                </span>
            </div>
        </div>
    </div>

    <div class="outDropdown" id="dropdown">
        <div class="inDropdown">
            <div class="header">
                <div class="search">
                    <div class="outInputText">
                        <input type="text" placeholder="Sistem İşleri İle İlgili Arama Yapabilirsin">
                        <div class="iconBox">
                            <i class="fas fa-search cP"></i>
                        </div>
                    </div>
                </div>

                <div class="themeAndLinks">
                    <div class="theme">
                        <label for="#">Tema:</label>
                        <form method="POST" action="">
                            <button class='active' name="dashboardTheme" value="dark">Koyu</button>
                            <button name="dashboardTheme" value="light">Açık</button>
                        </form>
                    </div>


                    <div class="linkBar">
                        <span>
                            <a href="">WebSite'yi Görüntüle</a>
                        </span>
                        <span>
                            <a href="">Çıkış Yap</a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="lists">
                <div class="listsBar">
                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <router-link :to="{ name: 'Categories' }">Kategoriler</router-link>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <router-link :to="{ name: 'NewCategory' }">Yeni Kategori Oluştur</router-link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="listsBar">
                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <router-link :to="{ name: 'Dashboard' }">Findm</router-link>
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
import { onMounted } from "@vue/runtime-core";

const props = defineProps(["title"]);

onMounted(() => {
    const menuBtn = document.querySelector(".menuBtn");
    const mobilMenuBtn = document.querySelector(".mobilMenuBtn");
    const themeBtn = document.querySelector(".themeBtn");
    const menu = document.querySelector(".outDropdown");
    const fullLine = document.querySelector(".outFullLine");
    const theme = document.querySelector(".outTheme");
    const closeTheme = document.querySelector(".closeTheme");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
    });

    mobilMenuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
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