<template>
  <v-row justify="center">
    <v-col cols="6">
      <div id="app" class="parent">
        <v-card style="margin: 100px">
          <h2>ログイン</h2>

          <div>
            <label for="loginEmail">メールアドレス:</label>
            <v-text-field
              label="メールアドレス"
              solo
              type="loginEmail"
              id="loginEmail"
              v-model="loginEmail"
            ></v-text-field>
          </div>
          <div>
            <label for="loginPassword">パスワード:</label>

            <v-text-field
              label="パスワード"
              solo
              type="password"
              id="loginPassword"
              v-model="loginPassword"
            ></v-text-field>
          </div>
          <p>{{ error }}</p>
          <v-btn color="primary" v-on:click="loginUser()">ログイン</v-btn>
          <v-btn color="primary" v-on:click="logoutUser()">ログアウト</v-btn>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { common } from "../common";

export default {
  mixins: [common],

  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      error: "",
    };
  },
  methods: {
    create: function () {},
    loginUser: function () {
      this.sign(this.auth, this.loginEmail, this.loginPassword)
        .then((userCredential) => {
          this.$router.push('/list')
        })
        .catch((error) => {
          this.error = "パスワードが違います";
          console.log(error);
        });
    },
    logoutUser() {
      this.auth.signOut();
    },
  },
  mounted() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.status = this.auth.currentUser.getIdToken(true);
      } else {
        this.error = "";
      }
    });
  },
};
</script>

<style>
.parent {
  text-align: center;
  margin: 0 auto;
}
</style>
