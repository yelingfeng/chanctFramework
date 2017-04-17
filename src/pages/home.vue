<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>hello </h2>
        <ul>
            <li v-for="item in list">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        created() {
            console.log('test jquery window width:' + $(window).width())
            console.log('test lodash ', _.max([1, 3, 5]))
            console.log('test createjs ', window.createjs)
        },
        computed: {
            ...mapGetters({
                list: 'global/getMenus'
            })
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
