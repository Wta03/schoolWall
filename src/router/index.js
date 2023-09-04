import Vue from 'vue'
import Router from 'vue-router'
import find from '@/components/find'
import get from '@/components/get'
import twohand from '@/components/twohand'
import question from '@/components/question'
import friend from '@/components/friend'
import home from '@/components/home'
import hall from '@/components/hall'
import hall_find from '@/components/hall_find'
import hall_get from '@/components/hall_get'
import hall_twohand from '@/components/hall_twohand'
import hall_question from '@/components/hall_question'
import hall_friend from '@/components/hall_friend'
import hall_in from '@/components/hall_in'
import hall_ss from '@/components/hall_ss'
import fresh from '@/components/fresh'
import fresh1 from '@/components/fresh1'
import hall_main from '@/components/hall_main'
import login from '@/components/login'
import register from '@/components/register'
import body from '@/components/body'
import Firstpage from '@/components/Firstpage'
import grzx from '@/components/grzx'
import wdxx_sx from '@/components/wdxx_sx'
import wdxx_hy from '@/components/wdxx_hy'
import fbxx from '@/components/fbxx'
import grxx from '@/components/grxx'
import zhxx from '@/components/zhxx'
import sy from '@/components/sy'
import trzy from '@/components/trzy'
import to_oth from '@/components/to_oth'
import t1 from '@/components/t1'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
          path: '/',
          name: 'login',
          component: login,
    },
        {
            path: '/register',
            name: 'register',
            component: register,
        },
        {
            path: '/Firstpage:user_name',
            name: 'Firstpage',
            component: Firstpage,
            children: [
                {
                    path: '/body:user_name',
                    name: 'body',
                    component: body
                },
                {
                    path: '/trzy:user_name/:duser',
                    name: 'trzy',
                    component: trzy
                },
                {
                    path: '/grzx:user_name',
                    name: 'grzx',
                    component: grzx,
                    children: [
                        {
                            path: '/fbxx:user_name',
                            name: 'fbxx',
                            component: fbxx
                        },
                        {
                            path: '/wdxx_sx:user_name/:duser',
                            name: 'wdxx_sx',
                            component:wdxx_sx,
                            children:[
                                {
                                    path: '/to_oth:user_name/:id',
                                    name: 'to_oth',
                                    component: to_oth
                                },
                                {
                                    path: '/t1:user_name/:id',
                                    name: 't1',
                                    component: t1
                                }
                            ]
                        },
                        {
                            path: '/wdxx_hy:user_name',
                            name: 'wdxx_hy',
                            component: wdxx_hy
                        },
                        {
                            path: '/grxx:user_name',
                            name: 'grxx',
                            component: grxx
                        },
                        {
                            path: '/zhxx:user_name',
                            name: 'zhxx',
                            component: zhxx
                        },
                        {
                            path: '/sy:user_name',
                            name: 'sy',
                            component:sy
                        },
                    ], redirect: '/sy:user_name'
                },
                {
                    path: '/home:user_name',
                    name: 'home',
                    component: home,
                    children: [
                        {
                            path: '/find:user_name',
                            name: 'find',
                            component: find
                        },
                        {
                            path: '/get:user_name',
                            name: 'get',
                            component: get
                        },
                        {
                            path: '/twohand:user_name',
                            name: 'twohand',
                            component: twohand
                        },
                        {
                            path: '/question:user_name',
                            name: 'question',
                            component: question
                        },
                        {
                            path: '/friend:user_name',
                            name: 'friend',
                            component: friend
                        }
                    ]
                }, {
                    path: '/hall:user_name',
                    name: 'hall',
                    component: hall,
                    children: [
                        {
                            path: '/fresh:val/:user_name',
                            name: 'fresh',
                            component: fresh
                        },
                        {
                            path: '/fresh1:val/:user_name',
                            name: 'fresh1',
                            component: fresh1
                        },
                        {
                            path: '/hall_in:val/:user_name',
                            name: 'hall_in',
                            component: hall_in
                        },
                        {
                            path: '/hall_ss:val/:user_name',
                            name: 'hall_ss',
                            component: hall_ss
                        },
                        {
                            path: '/hall_find:user_name',
                            name: 'hall_find',
                            component: hall_find
                        },
                        {
                            path: '/hall_get:user_name',
                            name: 'hall_get',
                            component: hall_get
                        },
                        {
                            path: '/hall_twohand:user_name',
                            name: 'hall_twohand',
                            component: hall_twohand
                        },
                        {
                            path: '/hall_question:user_name',
                            name: 'hall_question',
                            component: hall_question
                        },
                        {
                            path: '/hall_friend:user_name',
                            name: 'hall_friend',
                            component: hall_friend
                        },
                        {
                            path: '/hall_main:user_name',
                            name: 'hall_main',
                            component: hall_main
                        },
                    ], redirect: '/hall_main:user_name'
                }
            ], redirect: '/body:user_name'
},
    
    
  ]
})
