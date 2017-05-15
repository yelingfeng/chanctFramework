<template>
    <div id="app" class="viewBg">
        <demo></demo>
    </div>
</template>
<script>
    import demo from 'pages/testApp/layoutTest'
    export default {
        name: 'app',
        mounted() {
            // ajax测试
            // this.$store.dispatch('global/loadMenuData')
        },
        components: {
            demo
        },
        watch: {}
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
        overflow: hidden;
    }

    #app {
        size: 100%;
    }

    .viewBg {
        background: url("~assets/images/mainBg.jpg");
        background-repeat: repeat;
        background-size: cover;
        background-attachment: fixed;
    }

</style>
