import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { useUIStore } from '../stores/index';
import { storeToRefs } from 'pinia';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { 
    path: '/components', 
    name: 'Components',
    redirect: { name: 'Button' }, 
    component: ()=>import('../views/Component.vue'),
    children: [
        { path: 'button', name: 'Button', component: () => import('../views/ButtonDemo.vue') },
        { path: 'border', name: 'Border', component: () => import('../views/BorderDemo.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    const uiStore = useUIStore();
    const { isSideBarVisible } = storeToRefs(uiStore);
  
    // 根据目标路由决定是否显示顶部栏
    if (to.path === '/') {
      uiStore.toggleSiderBarVisible(false); 
    } else {
      uiStore.toggleSiderBarVisible(true); 
    }
  
    next();
  });

export default router