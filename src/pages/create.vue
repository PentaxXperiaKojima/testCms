<template>
  <div>
    <h1 style="text-align: center">記事作成</h1>
    <v-text-field label="Subejct" v-model="subject"></v-text-field>
    <mavon-editor :language="'ja'" v-model="body"></mavon-editor>
    {{ body }}
    <v-btn elevation="1" small v-on:click="create()">Post!!</v-btn>
    <snackbar ref="snack"></snackbar>
  </div>
</template>



<script>
import { common } from "../common";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import Snackbar from "../components/snackbar.vue";
import Vue from "vue";
Vue.use(mavonEditor);

export default {
  mixins: [common],
  data() {
    return {
      subject: "",
      body: "",
    };
  },
  methods: {
    create: function () {
      this.auth.currentUser.getIdToken().then((t) => {
        this.token = t;
        this.axios
          .post(
            this.endPoint + "Texts/create",
            {
              body: this.body,
              subject: this.subject,
            },
            {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
            }
          )
          .then((response) => {
            this.$refs.snack.showSnackbar("投稿しました。", "一覧へ", "/list");
          });
      });
    },
  },
  components: {
    Snackbar,
  },
};
</script>