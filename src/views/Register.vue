<template>
  <div class="register">
    <v-container>
      <h1>Register</h1>
      <v-form>
        <v-text-field
          label="Username"
          type="text"
          v-model="username"
        ></v-text-field>
        <v-text-field label="Email" type="email" v-model="email"></v-text-field>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
        ></v-text-field>
        <v-btn>Register</v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  }
};
</script>
