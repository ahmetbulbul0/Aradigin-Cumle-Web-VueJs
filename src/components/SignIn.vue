<template>
  <div class="outSignIn">
    <div class="inSignIn">
      <div class="outTitle">
        <div class="inTitle">Yazar Girişi</div>
      </div>
      <form class="signInForm" method="POST">
        <div class="formLine">
          <label>Hesap Numaranız: </label>
          <div class="outInputText">
            <input
              type="text"
              placeholder="Yazar Hesap Numaranızı Giriniz"
              name="no"
            />
          </div>
        </div>
        <div class="formLine">
          <label>Hesap Parolanız: </label>
          <div class="outInputText">
            <input
              type="password"
              placeholder="Yazar Hesap Parolanızı Giriniz"
              name="password"
            />
          </div>
        </div>
        <div class="formLine">
          <div class="outErrorBox">
            <span> Hatalı Giriş Bilgileri </span>
          </div>
        </div>
        <div class="formLine">
          <div class="outButtonBox">
            <button>Giriş Yap</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
