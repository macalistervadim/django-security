<template>
    <b-container class="header-container">
      <div class="header-top">
        <!-- Логотип и текст -->
        <div class="logo-container">
          <img src="@/assets/img/logo/logo.png" alt="Логотип PHOENIX STUDIO" class="logo">
          <div class="studio-info">
            <div class="studio-name">PHOENIX STUDIO</div>
            <div class="studio-subtitle">IT веб-студия</div>
          </div>
        </div>
      
        <!-- Кнопки "Вход" и "Регистрация" -->
        <div class="button-container">
          <b-button variant="outline-primary" class="btn-login">Вход</b-button>
          <b-button class="btn-register">Регистрация</b-button>
        </div>
      </div>
      
      <!-- Навигационное меню -->
      <hr class="nav-divider">
      <b-nav class="nav-items" pills>
        <b-nav-item href="#">Главная</b-nav-item>
        <b-nav-item href="#">О нас</b-nav-item>
        <b-nav-item href="#">Портфолио</b-nav-item>
        <b-nav-item href="#">Услуги</b-nav-item>
        <b-nav-item href="#">Товары</b-nav-item>
        <b-nav-item href="#">Сотрудничество</b-nav-item>
      </b-nav>
    </b-container>
  </template>
  
  <script>
  export default {
    name: 'AppHeader'
  };
  </script>
  
  <style scoped>
  .header-container {
    position: relative;
    background-color: black;
    width: 100%;
    border-radius: 34px;
    height: 500px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
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
    width: 80px;
    height: auto;
    margin-right: 10px;
  }
  
  .studio-info {
    font-family: 'Roboto', sans-serif;
    font-size: 27px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    flex-direction: column;
  }
  
  .studio-name {
    font-size: 27px;
    font-weight: 500;
  }
  
  .studio-subtitle {
    font-size: 14px;
    font-weight: 100;
  }
  
  .button-container {
    display: flex;
    gap: 10px;
  }
  
  .btn-login {
    width: 104px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 2px solid #00DFAA !important;
    color: #00DFAA !important;
  }
  
  .btn-login:hover {
    background-color: #00DFAA !important;
    border-color: #00DFAA !important;
    color: #fff !important;
  }
  
  .btn-register {
    background-color: transparent !important;
    border: 2px solid #00DFAA !important;
    color: #00DFAA !important;
  }
  
  .btn-register:hover {
    background-color: #00DFAA !important;
    border-color: #00DFAA !important;
    color: #fff !important;
  }
  
  .nav-items {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.nav-items ::v-deep .nav-link {
  color: #fff !important;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: background-color 0.3s ease;
  margin-right: 20px; /* Добавьте отступ между ссылками, если нужно */
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
  margin: 0;
}

  </style>
  