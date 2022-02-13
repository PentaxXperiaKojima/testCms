<template>
  <div>
    {{ text }}
    <v-snackbar v-model="snackbar" :multi-line="true">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false" :to="to">
          {{ result }}
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  // text スナックバー本文
  // resuult スナックバーボタン
  // to 遷移先
  name: "snackbar",
  data() {
    return {
      text: "",
      result: "",
      to: "",
      snackbar: false,
    };
  },
  methods: {
    showSnackbar: function (text, result, to) {
      this.snackbar = true;
      this.result = result;
      this.to = to;
      this.text = text;
    },
  },
};
</script>
