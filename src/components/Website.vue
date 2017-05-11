<template>
    <div class="cd-website" >
        <div class="cd-website__header">
            <span class="cd-website__header--title">新浪博客</span>
        </div>
        <table class='cd-website__table'>
            <tr v-for='item in tableData'>
                <td class='cd-website__table--title'>{{item.label}}：</td>
                <td class='cd-website__table--content'>{{item.value}}</td>
            </tr>
        </table>
        <div class="cd-website__arrow">
              <span class="cd-website__arrow--tl"></span>
              <span class="cd-website__arrow--tr"></span>
              <span class="cd-website__arrow--bl"></span>
              <span class="cd-website__arrow--br"></span>
        </div>
    </div>
</template>
<script>
const datas = [
    {label: '域名名称', value: 'www.sina.com'},
    {label: '域名类型', value: '新闻'},
    {label: '所属人', value: '夜聆风'},
    {label: '国家', value: '中国'},
    {label: '省份', value: '河北'},
    {label: '地市', value: '石家庄'},
    {label: '是否备案', value: '是'},
    {label: '发布时间', value: '2017-05-01 11:22:00'},
    {label: '用户数排名', value: '12'},
    {label: '用户数', value: '1234'},
    {label: '日活跃度排名', value: ''}
]
export default {
    name: 'website',
    data() {
        return {
            tableData: datas
        }
    }
}
</script>
<style >
@component-namespace cd {
    @b website{
        height:600px;
        margin:10px;
        position: relative;
        border: 1px solid rgba(0,210,255,0.3);
        @e header{
            line-height: 20px;
            height: 20px;
            padding:10px 15px;
            text-align: left;
            margin:5px 5px;
            background-color:rgba(14,72,107,.45);
            @m title{
                color:#fbb512;
                font-size:16px;
            }
        }
        @e table {
            line-height:26px;
            color: rgba(87, 248, 249, 0.85);
            font-size: 12px;
            font-weight: bold;
            margin-left:20px;
            @m title {
                white-space: nowrap;
                text-align: right;
            }
            @m content {
                text-align: left;
            }
        }
        @e arrow{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height:100%;

            & span{
                position:absolute;
                padding:2px;
                border-style: solid;
                border-color:#00deff;
            }
            @m tl{
                border-width:2px 0 0 2px;
                top:-4px;
                left:-3px
            }
            @m tr{
                border-width:2px 2px 0 0;
                top:-4px;
                right:-3px
            }
            @m bl{
                border-width: 0 0 2px 2px;
                bottom:-4px;
                left:-3px
            }
            @m br{
                border-width: 0 2px 2px 0 ;
                bottom:-4px;
                right:-3px
            }

        }

    }

}
</style>
