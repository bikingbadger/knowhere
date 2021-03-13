<template>
  <div class="register">
    <v-container>
      <v-row no-gutters style="height: 150px;">
        <v-col align-self="center" cols="6" offset="3">
          <v-card class="pa-2" outlined tile>
            <h1>Register</h1>
            <v-form>
              <v-text-field
                label="Username"
                type="text"
                v-model="username"
              ></v-text-field>
              <v-text-field
                label="Email"
                type="email"
                v-model="email"
              ></v-text-field>
              <v-text-field
                label="Password"
                type="password"
                v-model="password"
              ></v-text-field>
              <v-btn @click="registerUser">Register</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("auth", ["register"]),
    registerUser() {
      this.register({
        username: this.username,
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
