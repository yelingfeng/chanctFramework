<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
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
                styleObj: {
                    color: 'red'
                },
                msg: 'Welcome to Your Vue.js App'
            }
        },
        created() {
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
