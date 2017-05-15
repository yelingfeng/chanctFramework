<template >
    <div class="cd-title">
        {{titleName}}
    </div>
</template>

<script>
export default {
    name: 'title',
    props: {
        titleName: {
            type: String,
            default() {
                return ''
            }
        }
    }
}
</script>

<style lang="css">
@component-namespace cd {
    @b title{
        position: relative;
        margin: 5px 0;
        color: #fff;
        text-shadow: 0px 0px 6px #00deff;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        text-align: left;
        text-indent: 25px;
        font-family: "Microsoft YaHei";
        text-decoration: none;
        height: 20px;
        cursor: default;
        &:before{
            display: block;
            top: 1.5px;
            bottom: 3px;
            left: 3px;
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: #efb414;
            content: '';
        }
    }
}
</style>
