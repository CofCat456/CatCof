import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/User',
    component: () => import('../views/Userboard.vue'),
    children: [
      {
        path: 'ProductList',
        component: () => import('../views/ProductList.vue')
      },
      {
        path: 'Category/:id',
        component: () => import('../views/ProductCategory.vue')
      },
      {
        path: 'Product/:productId',
        component: () => import('../views/Product.vue')
      },
      {
        path: 'Cart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'Order',
        component: () => import('../views/UserOrder.vue')
      },
      {
        path: 'Order/:id',
        component: () => import('../views/UserOrderID.vue')
      },
      {
        path: 'About',
        component: () => import('../views/AboutShop.vue')
      }
    ]
  },
  {
    path: '/Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/administrator',
    component: () => import('../views/Administrator.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'orderList',
        component: () => import('../views/ProductOrderList.vue')
      },
      {
        path: 'coupon',
        component: () => import('../views/ProductCoupon.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
