<template>
    <div class="container mt-5">
      <h1>Profiles</h1>
      <form @submit.prevent="addProfile" class="mb-4">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" v-model="newProfile.user.username" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="newProfile.user.email" required>
        </div>
        <div class="mb-3">
          <label for="birthday" class="form-label">Birthday</label>
          <input type="date" class="form-control" id="birthday" v-model="newProfile.birthday" required>
        </div>
        <button type="submit" class="btn btn-primary">Add Profile</button>
      </form>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="profile in profiles" :key="profile.user.username">
            <td>{{ profile.user.username }}</td>
            <td>{{ profile.user.email }}</td>
            <td>{{ profile.birthday }}</td>
            <td>
              <button class="btn btn-primary btn-sm" @click="editProfile(profile)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deleteProfile(profile)">Delete</button>
              <button class="btn btn-success btn-sm" @click="sendProfile(profile)">Send</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        profiles: [],
        newProfile: {
          user: {
            username: '',
            email: ''
          },
          birthday: ''
        }
      };
    },
    created() {
      this.fetchProfiles();
    },
    methods: {
      fetchProfiles() {
        axios.get('http://127.0.0.1:8000/api/profiles/')
          .then(response => {
            this.profiles = response.data;
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      },
      addProfile() {
        axios.post('http://127.0.0.1:8000/api/profiles/', this.newProfile)
          .then(response => {
            this.profiles.push(response.data);
            this.resetNewProfile();
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      },
      resetNewProfile() {
        this.newProfile = {
          user: {
            username: '',
            email: ''
          },
          birthday: ''
        };
      },
      editProfile(profile) {
        // Логика редактирования профиля
        console.log('Edit profile:', profile);
      },
      deleteProfile(profile) {
        // Логика удаления профиля
        console.log('Delete profile:', profile);
      },
      sendProfile(profile) {
        // Логика отправки профиля
        console.log('Send profile:', profile);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  .table {
    margin-top: 20px;
  }
  </style>
  