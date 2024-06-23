<template>
  <b-container class="header-container">
    <div class="content-container">
      <div class="header-top">

        <div class="logo-container">
          <img src="@/assets/img/logo/logo.png" alt="Логотип PHOENIX STUDIO" class="logo">
          <div class="studio-info">
            <div class="studio-name">PHOENIX STUDIO</div>
          </div>
        </div>

        <div class="button-container">
          <b-button variant="outline-primary" class="btn-login"><i class="bi bi-box-arrow-in-right"></i>Вход</b-button>
          <b-button class="btn-register">Регистрация</b-button>
        </div>
      </div>

      <hr class="nav-divider">
      <div class="nav-language-container">
        <b-nav class="nav-items" pills>
          <b-nav-item href="#">Главная</b-nav-item>
          <b-nav-item href="#">О нас</b-nav-item>
          <b-nav-item href="#">Портфолио</b-nav-item>
          <b-nav-item-dropdown
              id="services-nav"
              text="Услуги"
              toggle-class="nav-link-custom"
              right
            >
            <b-dropdown-item>One</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown
              id="items-nav"
              text="Товары"
              toggle-class="nav-link-custom"
              right
            >
            <b-dropdown-item>One</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#">Сотрудничество</b-nav-item>
        </b-nav>

        <b-nav class="btn-language-toggle" >
        <b-nav-item-dropdown
          id="items-nav"
          text="RU"
          right
          class="lang-btn"
        >
          <b-dropdown-item>ENG</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
      </div>

      <div class="header-main-content">
        <div class="text-container">
          <h1 class="h1-header">PHOENIX STUDIO - Разжигаем огонь<br>технологий вместе</h1>
          <h3 class="h3-header">Качественный запуск продукта по низкой цене</h3>
          <b-button class="btn-more" variant="outline-primary">
            <i class="bi bi-arrow-down"></i> Подробнее
          </b-button>
        </div>
        <img src="@/assets/img/header/landingpage.png" alt="header-img" class="header-img">
      </div>
    </div>
  </b-container>
</template>


<script>

import { BButton } from 'bootstrap-vue-3';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
  components: {
    BButton,
  },
  name: 'AppHeader'
};
</script>

<style scoped>
.header-container {
  position: relative;
  background-color: black;
  width: 99%;
  max-width: none;
  border-radius: 20px;
  height: 600px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  margin: 0 auto;
  margin-top: 0.5%;
}

.bi-arrow-down, .bi-box-arrow-in-right {
  margin-right: 10px;
}

.header-main-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

}

.header-img {
  width: 300px;
  margin-right: 70px;

}

.content-container {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 75px;
  height: auto;
}

.h1-header {
  text-align: left;
}

.h3-header {
  text-align: left;
  margin-top: 20px;
  font-weight: 300;
  font-style: normal;
}

.btn-more {
  background-color: transparent !important;
  border: 2px solid #16b2f9 !important;
  color: #fff !important;
  border-radius: 12px;
  padding: 10px 30px;
  margin-top: 30px;
  font-weight: 500;
}

.btn-more:hover {
  background-color: #ffffff !important;
  border-color: #ffffff !important;
  color: #000000 !important;
  font-weight: 500;
}

.studio-info {
  font-family: 'Roboto', sans-serif;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  flex-direction: column;
}

.studio-name {
  font-size: 25px;
  font-weight: 500;
}

.button-container {
  display: flex;
  gap: 10px;
  height: 45px;
  font-size: 20px;
}

.btn-login {
  background-color: transparent !important;
  border: 2px solid #16b2f9 !important;
  color: #fff !important;
  border-radius: 12px;
  padding: 10px 20px;
  font-weight: 500;
}

.btn-login:hover {
  background-color: #16b2f9 !important;
  border-color: #16b2f9 !important;
  color: #fff !important;

}

.btn-register {
  background-color: #16b2f9!important;
  border: 2px solid #16b2f9!important;
  color: #fff !important;
  border-radius: 12px;
  font-weight: 500;
  padding: 10px 20px;
}

.btn-register:hover {
  background-color: #ffffff !important;
  border-color: #ffffff !important;
  color: #000000 !important;
}

.btn-language-toggle ::v-deep .nav-link {
  color: #fff !important;
  font-weight: 300;
  line-height: normal;
  transition: background-color 0.3s ease;
  background-color: transparent !important;
  border: 2px solid rgba(255, 255, 255, 0.1) !important; 
  border-radius: 12px !important;
  margin-top: 10px;
}

.nav-language-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-items {
  display: flex;
  align-items: center;
}

.nav-items ::v-deep .nav-link {
  color: #fff !important;
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  transition: background-color 0.3s ease;
  margin-right: 20px;
  margin-top: 10px;
}

.nav-items ::v-deep .nav-link:hover {
  background-color: rgba(128, 128, 128, 0.2);
  border-radius: 0.40rem;
  color: #fff !important;
}

.nav-divider {
  border: none;
  height: 1px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;
}
</style>



