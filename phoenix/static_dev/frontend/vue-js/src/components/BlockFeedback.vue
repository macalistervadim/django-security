<template>
    <b-container class="header-container">
      <b-container class="content-container">
        <h1 class="h2">Отзывы наших клиентов</h1>
        <Carousel :items-to-show="2" :autoplay="2000" :wrap-around="true">
          <slide v-for="(feedback, index) in feedbacks" :key="index">
            <div class="feedback-card">
              <h3>{{ feedback.name }}</h3>
              <p>{{ feedback.descriptionName }}</p>
              <p class="p-comment">{{ feedback.comment }}</p>
            </div>
          </slide>
  
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </b-container>
    </b-container>
  </template>
  
  <script>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  
  export default {
    name: 'BlockFeedback',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    data() {
      return {
        feedbacks: [
          { name: 'Иван Иванов', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.' },
          { name: 'Мария Смирнова', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.' },
          { name: 'Алексей Петров', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .header-container {
    position: relative;
    background-color: rgb(255, 255, 255);
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
    margin-top: 100px;
  }
  
  .content-container {
    width: 70%;
    text-align: center;
    margin-top: 20px; 
  }
  
  .h2 {
    margin-bottom: 30px;
    color:#000000
  }

  .carousel-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .carousel-wrapper {
    overflow: hidden;
    width: 100%;
  }
  
  .carousel-items {
    display: flex;
    transition: transform 0.3s ease;
  }
  
  .carousel-item {
    min-width: 100%;
    box-sizing: border-box;
  }
  
  .feedback-card {
    border: 2px solid #16b2f9;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    background: none; 
    color: #000000;
    max-width: 500px;
  }
  .feedback-card:hover {
    cursor: default;
  }
  
  .feedback-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 700
  }
  
  .feedback-card p {
    font-size: 14px;
    font-weight: 500
  }
  </style>
  