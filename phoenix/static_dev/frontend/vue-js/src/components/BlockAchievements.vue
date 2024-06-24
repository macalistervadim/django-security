<template>
    <b-container class="header-container">
      <b-row>
        <b-col cols="6">
          <div class="text-header">
            <h1>Почему стоит выбрать именно нас?</h1>
            <h3 class="h3">Наши преимущества перед конкурентами</h3>
          </div>
          <div class="text-container">
            <p>
              В <span class="blue">PHOENIX STUDIO</span> мы умеем говорить на языке программирования, будь то Python, Java, JavaScript или любой другой. Мы вкладываем в каждый проект нашу страсть и профессионализм, используя самые передовые инструменты и технологии. Не важно, нужно ли вам веб-приложение, мобильное приложение или программное обеспечение для компьютера — мы с радостью воплотим вашу идею в реальность. <br><br>К тому же, в <span class="blue">PHOENIX STUDIO</span> мы понимаем, что цена имеет значение. Мы предлагаем высокое качество по самой доступной цене. Реализуем и прокачаем ваш продукт, делая его не только качественным, но и экономически выгодным.
            </p>
          </div>
        </b-col>
        <b-col cols="6" class="card-col">
        <b-row>
            <b-col v-for="(card, index) in cards" :key="index" cols="6">
            <div class="card-outer">
                <div class="card-inner">
                <h3>{{ card.title }}</h3>
                <p>{{ card.description }}</p>
                </div>
            </div>
            </b-col>
        </b-row>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  export default {
    name: 'BlockComponent',
    data() {
      return {
        cards: [
          { title: 'Высокий уровень профессионализма', description: 'Мы гарантируем высокий уровень профессионализма в каждом аспекте наших услуг. Наши специалисты имеют обширный опыт в разработке, дизайне и поддержке проектов любой сложности.' },
          { title: 'Индивидуальный подход к каждому проекту', description: 'Мы ценим уникальность каждого проекта и подходим к нему индивидуально. Наша команда учитывает специфику бизнеса клиента, его цели и требования, чтобы предложить наилучшие решения.' },
          { title: 'Использование современных технологий', description: 'Мы всегда на шаг впереди в применении последних технологических достижений. Это позволяет нам создавать современные, инновационные и высокоэффективные веб-решения для наших клиентов.' },
          { title: 'Полный цикл услуг от идеи до поддержки', description: 'Мы предоставляем полный цикл услуг, начиная от консультаций и разработки концепции проекта, до долгосрочной поддержки и обслуживания после запуска. Мы сопровождаем наших клиентов на каждом этапе их онлайн-присутствия.' }
        ],
        cardDisabled: false
      };
    }
  };
  </script>
  
  <style scoped>
  .header-container {
    width: 58%;
    margin-top: 50px;
  }
  
  .blue {
    color: #16b2f9;
  }
  
  .h3 {
    font-size: 20px;
    opacity: 0.6;
  }
  
  .card-col {
    margin-top: 50px;
  }

  .text-container {
    padding: 20px;
    font-size: 17px;
    font-weight: 500;
  }

  .text-header {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  
  .card-outer {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 7px; /* убираем padding */
    margin-bottom: 10px;
    transition: border 0.3s ease; /* добавляем transition для плавного изменения border */
    border: 1px solid transparent; /* изначально обводка прозрачная */
  }
  
  .card-outer:hover {
    border-color: #16b2f9; /* добавляем обводку при наведении */
  }
  
  .card-inner {
    background-color: #f8f8f8;
    border-radius: 8px;
    padding: 15px;
  }
  
  .card-inner h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .card-inner p {
    font-size: 14px;
    line-height: 1.6;
    font-weight: 500;
    margin: 0;
  }
  
  .card-disabled {
    opacity: 0.5; /* делаем карточку неактивной */
    pointer-events: none; /* отключаем события мыши для неактивной карточки */
  }
  </style>
  