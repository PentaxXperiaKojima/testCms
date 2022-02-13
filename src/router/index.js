import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/pages/list'
import Create from '@/pages/create'
import Edit from '@/pages/edit'
import Login from '@/pages/login'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

Vue.use(Router)

const firebaseConfig = {
  apiKey: "AIzaSyBJ9QpbHxkbNvxZ-kBvRUu3ib7wI1zPcZo",
  authDomain: "originalcms.firebaseapp.com",
  projectId: "originalcms",
  storageBucket: "originalcms.appspot.com",
  messagingSenderId: "489133029007",
  appId: "1:489133029007:web:75a601b8e3763131d4e2fa",
};

initializeApp(firebaseConfig);
const auth = getAuth();

const routes = [

  {
    path: '/list',
    name: 'list',
    component: List,
    meta: { requiresAuth: true }
  }
  ,
  {
    path: '/create',
    name: 'create',
    component: Create,
    meta: { requiresAuth: true }

  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit,
    meta: { requiresAuth: true }

  },
  {
    path: '/',
    name: 'login',
    component: Login
  }
]


const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 認証状態をチェック
router.beforeEach((to, from, next) =>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    // 認証状態を取得
    auth.onAuthStateChanged(function (user) {
      if (user) {
        next();
      } else {
        // 認証されていない場合
        alert("ログインしてください。")
        next({ name: 'login' });
      }
    })
  } else {
    next();
  }
});

export default router;
