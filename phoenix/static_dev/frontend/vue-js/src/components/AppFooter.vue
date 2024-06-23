<template>
    <b-container class="footer-container">
      <b-container class="content-container">
        <div class="footer-top">
          <div class="logo-container">
            <img src="@/assets/img/logo/logo.png" alt="Логотип PHOENIX STUDIO" class="logo">
            <div class="studio-info">
              <div class="studio-name">PHOENIX STUDIO</div>
              <div class="studio-desc">IT веб-студия</div>
            </div>
          </div>
    
          <div class="button-container">
            <b-button class="btn-contact"><i class="bi bi-gift-fill icon-promo"></i>Получить промокод</b-button>
            <b-button variant="outline-primary" class="btn-details"><i class="bi bi-shield-lock icon-details"></i>Сотрудничество</b-button>
          </div>
        </div>
        <hr class="nav-divider">
        
        <div class="navigations">
          <b-row>
            <b-col>
              <div class="nav">
                <div class="nav-text">Навигация</div>
                <b-row>
                  <b-col>
                    <b-nav class="nav-items" pills>
                      <b-nav-item href="#">Главная</b-nav-item>
                      <b-nav-item href="#">О нас</b-nav-item>
                      <b-nav-item href="#">Портфолио</b-nav-item>
                      <b-nav-item href="#">Услуги</b-nav-item>
                      <b-nav-item href="#">Товары</b-nav-item>
                      <b-nav-item href="#">Портфолио</b-nav-item>
                      <b-nav-item href="#">Отзывы</b-nav-item>
                    </b-nav>
                  </b-col>
                  <b-col>
                    <b-nav class="nav-items" pills>
                      <b-nav-item href="#">Личный кабинет</b-nav-item>
                      <b-nav-item href="#">Обратная связь</b-nav-item>
                      <b-nav-item href="#">Получить промокод</b-nav-item>
                      <b-nav-item href="#">Сотрудничество</b-nav-item>
                      <b-nav-item href="#">Оформление заказа</b-nav-item>
                      <b-nav-item href="#">FAQ</b-nav-item>
                    </b-nav>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col>
              <div class="nav-two">
                <div class="nav-text">Создание сайтов</div>
                <b-nav class="nav-items" pills>
                  <b-nav-item href="#">Разработка сайта под ключ</b-nav-item>
                  <b-nav-item href="#">Доработка сайта</b-nav-item>
                  <b-nav-item href="#">Наполнение сайта</b-nav-item>
                  <b-nav-item href="#">Размещение сайта</b-nav-item>
                  <b-nav-item href="#">Готовые шаблоны</b-nav-item>
                </b-nav>
              </div>
            </b-col>
            <b-col>
              <div class="nav-three">
                <div class="nav-text">Автоматизация</div>
                <b-nav class="nav-items" pills>
                  <b-nav-item href="#">Разработка телеграм бота</b-nav-item>
                  <b-nav-item href="#">Разработка вк бота</b-nav-item>
                  <b-nav-item href="#">Разработка дискород сервера</b-nav-item>
                  <b-nav-item href="#">Наполнение дискород сервера</b-nav-item>
                  <b-nav-item href="#">Создание скриптов</b-nav-item>
                </b-nav>
              </div>
            </b-col>
            <b-col>
              <div class="nav-four">
                <div class="nav-text">Кто мы такие?</div>
                <b-nav class="nav-items" pills>
                  <b-nav-item disabled href="#">Виртуальная студия PHOENIX предлагает вам волшебное погружение в мир программирования и разработки. Мы — команда экспертов, специализирующихся на разработке программного обеспечения. Наша студия воплощает в жизнь самые смелые идеи, создавая качественные решения для самых разных отраслей. </b-nav-item>
                </b-nav>
              </div>
            </b-col>
          </b-row>
        </div>
        
        <b-row class="footer-bottom">
            <b-col>
                <div class="footer-info">
                    <p class="footer-text-small">все права защищены.</p>
                    <p>© 2024 PHOENIX STUDIO</p>
                </div>
            </b-col>
            <b-col>
                <p class="text-footer-email">Почта для связи</p>
                <p>phoenix-studio@coop.com</p>
            </b-col>
            <b-col>
                <div class="footer-buttons">
                    <b-button class="telegram-footer"><i class="bi bi-telegram icon-telegram"></i></b-button>
                    <b-button class="vk-footer"><i class="bi bi-person-lines-fill icon-vk"></i></b-button>
                    <b-button class="github-footer"><i class="bi bi-github icon-github"></i></b-button>
                    <b-button class="boosty-footer"><i class="bi bi-lightning-charge-fill icon-boosty"></i></b-button>
                </div>
            </b-col>
            <b-col>
                <p class="text-footer-politinfo">Политика конфиденциальности</p>
            </b-col>
            <b-col>
                <p class="text-footer-urinfo">Юридическая информация</p>
            </b-col>
        </b-row>
      </b-container>
    </b-container>
  </template>
    
  <script>
  import { BButton, BContainer, BRow, BCol, BNav, BNavItem } from 'bootstrap-vue-3';
  import 'bootstrap-icons/font/bootstrap-icons.css';
    
  export default {
    components: {
      BButton,
      BContainer,
      BRow,
      BCol,
      BNav,
      BNavItem
    },
    name: 'AppFooter'
  };
  </script>
    
  <style scoped>
  .footer-container {
    position: relative;
    background-color: #ffffff;
    width: 99%;
    max-width: none;
    border-radius: 20px;
    height: auto;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 0.5%;
  }
  
  .content-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .footer-top {
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
    width: 70px;
    height: auto;
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
    font-size: 18px;
    font-weight: 500;
    color: #000;
  }
  
  .studio-desc {
    font-size: 13px;
    font-weight: 300;
    margin-left: auto;
  }
  
  .button-container {
    display: flex;
    gap: 10px;
  }
  
  .btn-contact {
    background-color: #000000 !important;
    border: 2px solid #000000 !important;
    color: #ffffff !important;
    border-radius: 12px;
    padding: 5px 20px;
    font-weight: 500;
  }
  
  .btn-contact:hover {
    background-color: #ffffff !important;
    border-color: #000000 !important;
    color: #000000 !important;
  }
  
  .btn-contact:hover .icon-promo {
    color: #000;
  }
  
  .btn-details {
    background-color: #ffffff !important;
    border: 2px solid #000000 !important;
    color: #000000 !important;
    border-radius: 12px;
    font-weight: 500;
    padding: 10px 20px;
  }
  
  .btn-details:hover {
    background-color: #16b2f9 !important;
    border-color: #16b2f9 !important;
    color: #ffffff !important;
  }
  
  .btn-details:hover .icon-details {
    color: #ffffff;
  }
  
  .icon-details {
    margin-right: 10px;
  }

  .icon-promo {
    color: #16b2f9;
    margin-right: 10px;
  }
  
  .nav-divider {
    border: none;
    height: 1px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
  }
  
  .nav {
    margin-bottom: 40px;
  }
  
  .nav-two {
    margin-bottom: 20px;
    margin-left: 50px;
  }
  
  .nav-text {
    font-size: 20px;
    margin-left: 16px;
    margin-top: 25px;
    font-weight: 700;
  }
  
  .nav-items {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin: 10px;
  }
  
  .navigations {
    margin-top: 20px;
  }
  
  .nav-items ::v-deep .nav-link {
    color: rgba(0, 0, 0, 0.6) !important;
    padding: 3px;
    margin: 2px;
    font-weight: 500;
  }
  
  .nav-items ::v-deep .nav-link:hover {
    color: rgba(0, 0, 0) !important;
  }
  
  .footer-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .footer-text-small {
    opacity: 0.6;
    padding: 0;
    margin: 0;
  }

  .footer-info {
    margin-left: 10px;
    font-size: 14px;
    color: #000;
  }

  .text-footer-email {
 
    padding: 0;
    margin: 0;
    font-size: 15px;
    color: #16b2f9;
  }  

  .footer-buttons {
    margin-left: 0px;
  }

  .telegram-footer, .vk-footer, .boosty-footer, .github-footer {
    margin-left: 5px;
    background-color: #ffffff !important;
    border: 2px solid #000000 !important;
    color: #000000 !important;
    border-radius: 12px;
    margin-bottom: 20px;
  }

  .telegram-footer:hover, .vk-footer:hover, .boosty-footer:hover, .github-footer:hover  {
    border: 2px solid #16b2f9 !important;
    color: #16b2f9 !important;
  }

  .text-footer-politinfo, .text-footer-urinfo {
    font-size: 15px;
  }

  </style>
  