<template>
    <div></div>
</template>
<script>
    import {menu} from '../router/router.config'
    import navMenu from './Menu'
    export default{
        name: 'sidebar',
        data() {
            return {
                'menu': menu,
                collapsed: false
            }
        },
        components: {
            navMenu
        },
        methods: {}
    }
</script>
<style>


</style>
