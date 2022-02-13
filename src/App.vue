
<template>
  <v-app id="inspire">
    <v-navigation-drawer app v-model="drawer" clipped>
      
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              メニュー
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name" :to="nav_list.to">
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer></v-spacer
      ><v-toolbar-items>
        <v-btn text to="/">ログイン</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <div id="app">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>




<script>
export default {
  name: "App",
  data() {
    return {
      drawer: null,
      nav_lists: [
        { name: "記事作成", icon: "mdi-vuetify", to: "/create" },
        { name: "記事一覧", icon: "mdi-cogs", to: "/list" },
        { name: "---", icon: "mdi-palette", to: "" },
        { name: "---", icon: "mdi-view-dashboard", to: "" },
      ],
    };
  },
};
</script>

<style>
</style>