<template >
    <div class="chart" ref="chart" :style="styleObj"></div>
</template>
<script>
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
        },
        renderData: {
            type: Array,
            default() {
                return []
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
    watch: {
        renderData() {
            this.commondDataSourceToTarget()
        }
    },
    mounted() {
        this.EC = echarts.init(this.$refs.chart)
        this.build();
    },
    methods: {
        build() {
            let obj = {
                'legend': {
                    'show': true,
                    'left': 'right',
                    'top': 'top',
                    'textStyle': {
                        'color': '#00d8f1',
                        'fontFamily': 'Microsoft YaHei'
                    },
                    'itemWidth': 16,
                    'itemHeight': 3,
                    'itemGap': 6,
                    'data': [
                        {
                            'name': 'A'
                        },
                        {
                            'name': 'B'
                        }
                    ]
                },
                'color': [
                    '#00fcff',
                    '#54b3ea',
                    '#2a8fca',
                    '#015b8f',
                    '#084594'
                ],
                'tooltip': {
                    'trigger': 'axis',
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
                'grid': {
                    'left': '20',
                    'right': '40',
                    'bottom': '20',
                    'top': '30',
                    'containLabel': true
                },
                'xAxis': [
                    {
                        'name': '',
                        'type': 'category',
                        'nameTextStyle': {
                            'color': '#9ecae1'
                        },
                        'data': [
                            '制造页',
                            '金融',
                            '教育',
                            '个人',
                            '军队',
                            '事业单位'
                        ],
                        'axisTick': {
                            'alignWithLabel': true
                        },
                        'axisLabel': {
                            'textStyle': {
                                'color': '#9ecae1',
                                'fontFamily': 'Microsoft YaHei',
                                'fontSize': 12
                            },
                            'interval': 'auto',
                            'rotate': 0
                        },
                        'splitLine': false,
                        'axisLine': false,
                        'boundaryGap': [
                            '0%',
                            '5%'
                        ]
                    }
                ],
                'yAxis': [
                    {
                        'max': null,
                        'min': null,
                        'name': '',
                        'nameTextStyle': {
                            'color': '#9ecae1'
                        },
                        'type': 'value',
                        'axisLabel': {
                            'textStyle': {
                                'color': '#9ecae1',
                                'fontFamily': 'Microsoft YaHei',
                                'fontSize': 12
                            },
                            'interval': 'auto',
                            'rotate': 0
                        },
                        'splitLine': {
                            'show': false,
                            'lineStyle': {
                                'color': 'rgba(0,228,255,0.1)',
                                'width': 2,
                                'type': 'solid'
                            }
                        },
                        'axisLine': false,
                        'boundaryGap': [
                            '0%',
                            '5%'
                        ]
                    }
                ],
                'series': [
                    {
                        'type': 'bar',
                        'stack': true,
                        'itemStyle': {
                            'emphasis': {
                                'color': '#00ccff'
                            }
                        },
                        'barWidth': '20',
                        'name': 'A',
                        'data': [
                            {
                                'name': '制造页',
                                'value': 10,
                                'dataObj': {
                                    'name': '制造页',
                                    'value': 10,
                                    'category': 'A'
                                },
                                'tooltip': {},
                                'group': 'group'
                            },
                            {
                                'name': '金融',
                                'value': 20,
                                'dataObj': {
                                    'name': '金融',
                                    'value': 20,
                                    'category': 'A',
                                    'info': '123445'
                                },
                                'tooltip': {
                                    'formatter': '123445'
                                },
                                'group': 'group'
                            },
                            {
                                'name': '教育',
                                'value': 50,
                                'dataObj': {
                                    'name': '教育',
                                    'value': 50,
                                    'category': 'A',
                                    'info': '123445'
                                },
                                'tooltip': {
                                    'formatter': '123445'
                                },
                                'group': 'group'
                            },
                            {
                                'name': '个人',
                                'value': 60,
                                'dataObj': {
                                    'name': '个人',
                                    'value': 60,
                                    'category': 'A',
                                    'info': '123445'
                                },
                                'tooltip': {
                                    'formatter': '123445'
                                },
                                'group': 'group'
                            },
                            {
                                'name': '军队',
                                'value': 15,
                                'dataObj': {
                                    'name': '军队',
                                    'value': 15,
                                    'category': 'A',
                                    'info': '123445'
                                },
                                'tooltip': {
                                    'formatter': '123445'
                                },
                                'group': 'group'
                            },
                            {
                                'name': '事业单位',
                                'value': 120,
                                'dataObj': {
                                    'name': '事业单位',
                                    'value': 120,
                                    'category': 'A',
                                    'info': '123445'
                                },
                                'tooltip': {
                                    'formatter': '123445'
                                },
                                'group': 'group'
                            }
                        ]
                    },
                    {
                        'type': 'bar',
                        'stack': true,
                        'itemStyle': {
                            'emphasis': {
                                'color': '#00ccff'
                            }
                        },
                        'barWidth': '20',
                        'name': 'B',
                        'data': [
                            {
                                'name': '制造页',
                                'value': 10,
                                'dataObj': {
                                    'name': '制造页',
                                    'value': 10,
                                    'category': 'B'
                                },
                                'tooltip': {},
                                'group': 'group'
                            },
                            {
                                'name': '金融',
                                'value': 20,
                                'dataObj': {
                                    'name': '金融',
                                    'value': 20,
                                    'category': 'B',
                                    'info': '123445'
                                },
                                'tooltip': {
                                    'formatter': '123445'
                                },
                                'group': 'group'
                            },
                            {
                                'name': '教育',
                                'value': 50,
                                'dataObj': {
                                    'name': '教育',
                                    'value': 50,
                                    'category': 'B',
                                    'info': '123445'
                                },
                                'tooltip': {
                                    'formatter': '123445'
                                },
                                'group': 'group'
                            },
                            {
                                'name': '个人',
                                'value': 60,
                                'dataObj': {
                                    'name': '个人',
                                    'value': 60,
                                    'category': 'B',
                                    'info': '123445'
                                },
                                'tooltip': {
                                    'formatter': '123445'
                                },
                                'group': 'group'
                            },
                            {
                                'name': '军队',
                                'value': 15,
                                'dataObj': {
                                    'name': '军队',
                                    'value': 15,
                                    'category': 'B',
                                    'info': '123445'
                                },
                                'tooltip': {
                                    'formatter': '123445'
                                },
                                'group': 'group'
                            },
                            {
                                'name': '事业单位',
                                'value': 120,
                                'dataObj': {
                                    'name': '事业单位',
                                    'value': 120,
                                    'category': 'B',
                                    'info': '123445'
                                },
                                'tooltip': {
                                    'formatter': '123445'
                                },
                                'group': 'group'
                            }
                        ]
                    }
                ],
                'textStyle': {
                    'fontFamily': 'Microsoft YaHei'
                }
            }
            this.EC.setOption(obj)
        },
        /**
         * [commondDataSourceToTarget ]
         * 从业务接口数据构建成echarts需要的数据
         * @return {[type]} [description]
         */
        commondDataSourceToTarget() {
            let data = this.renderData;

            let xAxis = [];
            let group = [];
            let series = [];
            let chainsData = _.chain(data);
            let legend = [];
            if (data.length) {
                group = chainsData.filter(it => {
                    return it.category !== '' && it.category != null ;
                })
                .map(it => {
                    return it.category;
                })
                .uniq()
                .value();

                group.forEach(it => {
                    legend.push({
                        name: it
                    })
                })

                xAxis = chainsData.map(it => {
                    return it.name;
                }).uniq().value();

                group.forEach(g => {
                    let seriesTemp = [];
                    data.forEach(d => {
                        if (d.category === g) {
                            seriesTemp.push({
                                name: d.name,
                                value: d.value
                            })
                        }
                    })
                    let seriesObj = {}
                    seriesObj.name = g;
                    seriesObj.data = seriesTemp;
                    seriesObj.stack = true
                    series.push(seriesObj)
                })

                let op = {
                    series,
                    xAxis,
                    legend
                }
                console.log(op)
            }
        }
    }
}
</script>

<style lang="css">

</style>
