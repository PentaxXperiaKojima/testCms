<template>
  <div>
    <h1>記事編集</h1>
    {{ $route.params.id }}
    <v-text-field label="Subejct" v-model="subject"></v-text-field>
    <v-textarea
      v-model="body"
      name="input-7-1"
      label="Body"
      value=""
      hint=""
    ></v-textarea>

    <v-btn elevation="1" small v-on:click="edit()">Post!!</v-btn>
  </div>
</template>



<script>
import { common } from "../common";

export default {
  mixins: [common],
  data() {
    return {
      id:"",
      subject: "",
      body: "",
    };
  },
  methods: {
    edit: function () {
      this.auth.currentUser.getIdToken().then((t) => {
        this.token = t;
        this.axios
          .post(
            this.endPoint + "Texts/edit",
            {
              id: this.$route.query.id,
              body: this.body,
              subject: this.subject,
            },
            {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
            }
          )
          .then((response) => (this.infos = response.data));
      });
    },
  },
  mounted() {
    this.auth.currentUser.getIdToken().then((t) => {
      this.axios
        .get(this.endPoint + `Texts/${this.$route.query.id}`, {
          headers: {
            Authorization: `Bearer ${t}`,
          },
        })
        .then((response) => {
          this.subject = response.data.subject;
          this.body = response.data.body;
        });
    });
  },
};
</script>