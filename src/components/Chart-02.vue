<template >
    <div class="chart" ref="chart" :style="styleObj"></div>
</template>
<script>
import ChinaMapJson from 'assets/map/china.json'
// import ChinaPos from 'assets/map/china.js'
echarts.registerMap('china', ChinaMapJson);
export default {
    props: {
        width: {
            type: String,
            default() {
                return 300
            }
        },
        height: {
            type: String,
            default() {
                return 300
            }
        }
    },
    computed: {
        styleObj() {
            return {
                width: this.width + 'px',
                height: this.height + 'px'
            }
        }
    },
    mounted() {
        this.EC = echarts.init(this.$refs.chart)
        this.build();
    },
    methods: {
        build() {
            let obj = {
                'visualMap': {
                    'type': 'piecewise',
                    'color': [
                        '#FF4500',
                        '#ff7200',
                        '#fbb512',
                        '#00f37e',
                        '#00FCFF'
                    ],
                    'min': 0,
                    'max': 1000,
                    'textStyle': {
                        'color': '#fff'
                    },
                    'itemWidth': 16,
                    'itemHeight': 3,
                    'show': true,
                    'left': 'left',
                    'top': 'bottom'
                },
                'series': [
                    {
                        'type': 'effectScatter',
                        'coordinateSystem': 'geo',
                        'symbolSize': 12,
                        'rippleEffect': {
                            'brushType': 'stroke'
                        },
                        'label': {
                            'normal': {
                                'show': false
                            }
                        },
                        'data': [
                            {
                                'name': '广东',
                                'value': [
                                    113.23,
                                    23.16,
                                    ' '
                                ],
                                'dataObj': {
                                    'name': '广东',
                                    'value': ' ',
                                    'groups': 'china'
                                }
                            },
                            {
                                'name': '青海',
                                'value': [
                                    101.74,
                                    36.56,
                                    '10'
                                ],
                                'dataObj': {
                                    'name': '青海',
                                    'value': '10'
                                }
                            },
                            {
                                'name': '四川',
                                'value': [
                                    104.06,
                                    30.67,
                                    '366'
                                ],
                                'dataObj': {
                                    'name': '四川',
                                    'value': '366'
                                }
                            },
                            {
                                'name': '山东',
                                'value': [
                                    117,
                                    36.65,
                                    '60'
                                ],
                                'dataObj': {
                                    'name': '山东',
                                    'value': '60'
                                }
                            },
                            {
                                'name': '辽宁',
                                'value': [
                                    123.38,
                                    41.8,
                                    '555'
                                ],
                                'dataObj': {
                                    'name': '辽宁',
                                    'value': '555'
                                }
                            },
                            {
                                'name': '陕西',
                                'value': [
                                    108.95,
                                    34.27,
                                    '1000'
                                ],
                                'dataObj': {
                                    'name': '陕西',
                                    'value': '1000'
                                }
                            }
                        ]
                    },
                    {
                        'type': 'map',
                        'geoIndex': 0,
                        'tooltip': {
                            'trigger': 'item',
                            'textStyle': {
                                'fontSize': 12,
                                'align': 'left'
                            },
                            'axisPointer': {
                                'type': 'shadow',
                                'lineStyle': {
                                    'color': '#555555'
                                }
                            },
                            'backgroundColor': 'rgba(1,75,117,0.5)',
                            'padding': 9
                        },
                        'data': [
                            {
                                'name': '南海诸岛',
                                'value': ''
                            }
                        ]
                    }
                ],
                'geo': {
                    'map': 'china',
                    'label': {
                        'emphasis': {
                            'show': false
                        }
                    },
                    'scaleLimit': {
                        'min': 1
                    },
                    'roam': 'scale',
                    'itemStyle': {
                        'normal': {
                            'areaColor': '#032237',
                            'borderColor': 'rgba(0,210,255,0.5)',
                            'borderWidth': 1
                        },
                        'emphasis': {
                            'areaColor': '#079ec9',
                            'borderWidth': 1
                        }
                    }
                },
                'tooltip': {
                    'trigger': 'item',
                    'textStyle': {
                        'fontSize': 12,
                        'align': 'left'
                    },
                    'axisPointer': {
                        'type': 'shadow',
                        'lineStyle': {
                            'color': '#555555'
                        }
                    },
                    'backgroundColor': 'rgba(1,75,117,0.5)',
                    'padding': 9
                }
            }
            this.EC.setOption(obj)
        }
    }
}
</script>

<style lang="css">

</style>
