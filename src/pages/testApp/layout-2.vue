<template>
    <div class="cd-box" :style="boxStyle">
        <el-row  :gutter="20">
          <!-- left-->
          <el-col :span="6">
               <div class="cd-box__left" :style="leftStyle">
                   <titleComp titleName="网站基本信息"></titleComp>
                   <website></website>
               </div>
          </el-col>
           <!-- right-->
          <el-col :span="16">
              <div class="cd-box__content">
                  <el-row  :gutter="20">
                      <el-col :span="16">
                           <div class="cd-box__content--center">
                               <p>content-center-16</p>
                           </div>
                      </el-col>
                      <el-col :span="4">
                           <div class="cd-box__content--right">
                               <p>content-right-4</p>
                           </div>
                      </el-col>
                  </el-row>
                  <el-row  :gutter="20">
                      <el-col :span="10">
                           <div class="cd-box__content--bcenter">
                               <p>content-bcenter-10</p>
                           </div>
                      </el-col>
                      <el-col :span="10">
                           <div class="cd-box__content--bright">
                               <p>content-bright-10</p>
                           </div>
                      </el-col>
                  </el-row>
              </div>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import website from 'components/Website'
import titleComp from 'components/Title'
export default {
    name: 'testApp',
    data() {
        return {
            width: '1000',
            height: '100%'
        }
    },
    components: {
        website,
        titleComp
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
        this.resizeApp()
        $(window).resize(() => {
            this.resizeApp()
        })
    },
    methods: {
        resizeApp() {
            this.width = $(window).width()
            this.height = $(window).height()
        }
    }
}
</script>

<style >

$borderColor:rgba(0,210,255,0.5);
$fontColor : #fff;


@component-namespace cd {
    @b box {
        padding-top:10px;
        color: $fontColor ;
        @e left {
        }
        @e content{
            border: 1px solid $borderColor;
            height : 100%;
            @m center{
                width: 500px;
                height: 400px;
            }

            @m right{
                width: 300px;
                height: 400px;
            }

            @m bcenter{
                width: 500px;
                height: 250px;
            }

            @m bright{
                width: 500px;
                height: 250px;
            }
        }
    }
}

</style>
