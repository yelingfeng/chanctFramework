<template>
    <div id="app">
        <div class="app-home">
            <el-menu :default-active="activeMenu" theme="dark" mode="horizontal" router>
                <template v-for="(route, index) in $router.options.routes">
                    <template v-if="route.children && route.name">
                        <el-submenu :index="route.name">
                            <template slot="title"><i :class="['fa',`fa-${route.icon}`]"></i>
                                <router-link :to="route.path">{{route.name}}</router-link>
                            </template>
                            <el-menu-item :key="cRoute.name" v-for="(cRoute, cIndex) in route.children">
                                <router-link :to="`${route.path}/${cRoute.path}`">{{cRoute.name}}</router-link>
                            </el-menu-item>
                        </el-submenu>
                    </template>
                    <template v-if="!route.children && route.name">
                        <el-menu-item :index="route.path"><i :class="['fa',`fa-${route.icon}`]"></i>{{route.name}}
                        </el-menu-item>
                    </template>
                </template>
            </el-menu>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>
<script>
    import SideNaviBar from 'components/SideNaviBar.vue'
    export default {
        name: 'app',
        data() {
            return {
                activeMenu: '1'
            }
        },
        created() {
        },
        mounted() {
            // ajax测试
            this.$store.dispatch('global/loadMenuData')
        },
        components: {
            navBar: SideNaviBar
        },
        watch: {},
        methods: {
            handleSelect() {

            }
        }
    }
</script>

<style>
    @reset-global pc;
    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #app {
        size: 100%;
    }

    a {
        color: #cccccc;
        text-decoration: none;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    .app-home {
        width: 1000px;
        height: 100%;
        margin: 0 auto;
    }

    .content {
        margin-top: 20px;
        padding: 50px;
        border: 1px solid #ccc;
    }

</style>
