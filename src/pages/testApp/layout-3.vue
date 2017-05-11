<template>
    <div class="cd-box" :style="boxStyle">
        <el-row  :gutter="20">
          <!-- left-->
          <el-col :span="6">
               <div class="cd-box__left" :style="leftStyle">
                   <TitleComp titleName="网站基本信息"></TitleComp>
                   <Website></Website>
               </div>
          </el-col>
           <!-- right-->
          <el-col :span="16">
              <div class="cd-box__content">
                  <el-row  :gutter="20">
                      <el-col :span="16">
                           <div class="cd-box__content--center">
                                <TitleComp titleName="近一年用户发展趋势"></TitleComp>
                                <StackBar width="650" height="300"></StackBar>
                           </div>
                      </el-col>
                      <el-col :span="4">
                           <div class="cd-box__content--right">
                               <TitleComp titleName="12月活跃用户TOP10"></TitleComp>
                               <LevelBar width="350" height="300"></LevelBar>
                           </div>
                      </el-col>
                  </el-row>
                  <el-row  :gutter="20" style="margin-top:10px;">
                      <el-col :span="16">
                           <div class="cd-box__content--bcenter">
                              <TitleComp titleName="12月用户地域分布"></TitleComp>
                              <MapChart width="600" height="300"></MapChart>
                           </div>
                      </el-col>
                      <el-col :span="6">
                           <div class="cd-box__content--bright">
                               <TitleComp titleName="12月运营商占比"></TitleComp>
                               <PieChart width="400" height="300"></PieChart>
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
import LevelBar from 'components/Chart-01'
import MapChart from 'components/Chart-02'
import StackBar from 'components/Chart-03'
import PieChart from 'components/Chart-04'
export default {
    name: 'testApp',
    data() {
        return {
            width: '1000',
            height: '100%'
        }
    },
    components: {
        Website,
        TitleComp,
        LevelBar,
        MapChart,
        StackBar,
        PieChart
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
            height : 100%;
            @m center{
                width: 500px;
                height: 300px;
            }

            @m right{
                width: 300px;
                height: 300px;
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
