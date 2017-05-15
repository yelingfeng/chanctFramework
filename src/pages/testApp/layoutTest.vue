<template>
    <div class="cd-box" :style="boxStyle">
        <el-row>
            <el-col :span="6">
                <div class="cd-box__left" :style="leftStyle">
                    <TitleComp titleName="网站基本信息"></TitleComp>
                    <Website></Website>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="cd-box__right">
                    <p>right</p>
                    <el-row >
                        <el-col :span="12">
                            <div class="cd-box__right--topCenter">
                                <p >topCenter</p>
                                <Comp01 width="400" height="300"> </Comp01>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="cd-box__right--topRight">
                                <p >topRight</p>
                                <Comp02 width="400" height="300"> </Comp02>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="12">
                            <div class="cd-box__right--bottomCenter">
                                <p >bottomCenter</p>
                                <Comp03 width="400" height="300"> </Comp03>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="cd-box__right--bottomRight">
                                <p >bottomRight</p>
                                <Comp04 width="400" height="300"> </Comp04>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Website from 'components/Website'
    import TitleComp from 'components/Title'
    import Comp01 from 'components/Chart-01'
    import Comp02 from 'components/Chart-02'
    import Comp03 from 'components/Chart-03'
    import Comp04 from 'components/Chart-04'
    export default {
        name: 'layout',
        data() {
            return {
                width: 1000,
                height: '100%'
            }
        },
        components: {
            Website,
            TitleComp,
            Comp01,
            Comp02,
            Comp03,
            Comp04
        },
        computed: {
            leftStyle() {
                return {
                    height: this.height - 50 + 'px'
                }
            },
            boxStyle() {
                return {
                    width: this.width + 'px',
                    height: this.height + 'px'
                }
            }
        },
        mounted() {
            this.resizeWin()
            $(window).resize(() => {
                this.resizeWin()
            })
        },
        methods: {
            resizeWin() {
                this.width = $(window).width()
                this.height = $(window).height()
            }
        }

    }
</script>

<style>

   $borderColor:rgba(0,210,255,0.5);
   $color: #fff;

   @component-namespace cd {
       @b box {
           color : $color;
           @e left {
               margin-top:10px;
               width:300px;
               height:500px;
           }
           @e right {

               @m topCenter{
                   width :600px;
                   height:250px;
               }
               @m topRight {
                   width :400px;
                   height:250px;
               }
               @m bottomCenter{
                   width :600px;
                   height:250px;
               }
               @m bottomRight{
                   width :400px;
                   height:250px;
               }
           }
       }
   }
</style>
