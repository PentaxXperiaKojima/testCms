<template>
  <div>
    <h1 style="text-align: center">記事一覧</h1>
    <v-simple-table >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">タイトル</th>
            <th class="text-left"></th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="info in infos" :key="info.id">
            <td>{{ info.subject }}</td>
            <td>
              <router-link :to="{ name: 'edit', query: { id: info.id } }" style="text-decoration: none;">
                <v-btn elevation="1" small>編集 </v-btn></router-link
              >
            </td>
            <td>
              <v-btn elevation="1" small v-on:click="del(info.id)">削除</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>



<script>
import { common } from "../common";

export default {
  mixins: [common],
  name: "HelloNuxt",
  data() {
    return {
      it: "hoge",
      posts: [],
      token: null,
      infos: null,
    };
  },
  methods: {
    del: function (delId) {
      alert(delId);
      this.axios.post(this.endPoint + "Texts/delete", {
        id: delId,
      });
    },
  },
  mounted() {
    this.auth.currentUser.getIdToken().then((t) => {
      this.token = t;
      this.axios.get(this.endPoint + "Texts", {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }).then((response) => (this.infos = response.data));;
    });
  },
};
</script>