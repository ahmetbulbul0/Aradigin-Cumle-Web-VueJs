<template>
    <div class="outMenu">
        <div class="inMenu">
            <div class="bar">
                <span class="textBox">
                    <a href="" class="strong">
                        <i class="far fa-newspaper"></i>
                        {{ title }}
                    </a>
                </span>
                <span class="brace"></span>
                <span class="textBox">
                    <a href="#">
                        Haberler
                    </a>
                </span>
                <span class="brace"></span>
                <span class="textBox">
                    <a href="#">
                        Kategoriler
                    </a>
                </span>
                <span class="brace"></span>
                <span class="textBox">
                    <a href="#">
                        Kategori Grupları
                    </a>
                </span>
                <span class="brace"></span>
                <span class="textBox">
                    <a href="#">
                        Kaynak Siteler
                    </a>
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
                                <a href="">Kullanıcı Tipleri</a>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <a href="">Kullanıcı Tipi Ekle</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <a href="">Kullanıcılar</a>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <a href="#">Kullanıcı Ekle</a>
                                </span>
                            </div>
                            <div class="item">
                                <span>
                                    <a href="#">Kullanıcı Ayarları</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <a href="#">Kaynak Siteleri</a>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <a href="#">Kaynak Site Ekle</a>
                                </span>
                            </div>
                            <div class="item">
                                <span>
                                    <a href="#">Kaynak Linkler</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <a href="#">Kategori Tipleri</a>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <a href="#">Kategori Tipi Ekle</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="listsBar">
                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <a href="#">Kategoriler</a>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <a href="#">Kategori Ekle</a>
                                </span>
                            </div>
                            <div class="item">
                                <span>
                                    <a href="#">Kategoriler Şeması</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <a href="#">Kategori Grupları</a>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <a href="#">Kategori Grubu Ekle</a>
                                </span>
                            </div>
                            <div class="item">
                                <span>
                                    <a href="#">Kategori Grubu Link Metinleri</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <a href="#">Haberler</a>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <a href="#">Haber İstatistikleri</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="outList">
                        <div class="titleBox">
                            <span>
                                <a href="#">Ayarlar</a>
                            </span>
                        </div>
                        <div class="list">
                            <div class="item">
                                <span>
                                    <a href="#">Tema</a>
                                </span>
                            </div>
                            <div class="item">
                                <span>
                                    <a href="#">Sabitler</a>
                                </span>
                            </div>
                            <div class="item">
                                <span>
                                    <a href="#">Ziyaretçiler</a>
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