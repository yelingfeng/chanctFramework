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
        }
    },
    name: 'pie',
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
                'color': [
                    '#00fcff',
                    '#00d5ff',
                    '#00aaff',
                    '#0c7ff2',
                    '#0a5bcc',
                    '#1d8dc4',
                    '#4fc0c4',
                    '#79dae0',
                    '#79e0cf',
                    '#81dab7',
                    '#25d9b8'
                ],
                'legend': {
                    'show': true,
                    'left': 'left',
                    'bottom': 'bottom',
                    'textStyle': {
                        'color': '#00d8f1',
                        'fontFamily': 'Microsoft YaHei'
                    },
                    'itemWidth': 16,
                    'itemHeight': 3,
                    'itemGap': 6,
                    'data': [
                        '西藏',
                        '海南',
                        '宁夏',
                        '青海'
                    ],
                    'orient': 'vertical'
                },
                'series': [
                    {
                        'type': 'pie',
                        'radius': [
                            '50%',
                            '70%'
                        ],
                        'center': [
                            '50%',
                            '50%'
                        ],
                        'roseType': false,
                        'label': {
                            'normal': {
                                'show': true
                            },
                            'emphasis': {
                                'show': true
                            }
                        },
                        'labelLine': {
                            'normal': {
                                'show': true
                            }
                        },
                        'data': [
                            {
                                'name': '西藏',
                                'value': 11.12,
                                'dataObj': {
                                    'color': 3,
                                    'diffv': 2.9,
                                    'idx': 28,
                                    'value': 11.12,
                                    'prov_id': '540000',
                                    'name': '西藏',
                                    'percent ': 0.08
                                },
                                'group': 'noGroup',
                                'label': {
                                    'normal': {}
                                },
                                'labelLine': {
                                    'length': 0,
                                    'normal': {
                                        'show': true
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'name': '海南',
                                'value': 8.22,
                                'dataObj': {
                                    'color': 3,
                                    'diffv': 2.89,
                                    'idx': 29,
                                    'value': 8.22,
                                    'prov_id': '460000',
                                    'name': '海南',
                                    'percent ': 0.06
                                },
                                'group': 'noGroup',
                                'label': {
                                    'normal': {}
                                },
                                'labelLine': {
                                    'length': 0,
                                    'normal': {
                                        'show': true
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'name': '宁夏',
                                'value': 5.33,
                                'dataObj': {
                                    'color': 3,
                                    'diffv': 2.17,
                                    'idx': 30,
                                    'value': 5.33,
                                    'prov_id': '640000',
                                    'name': '宁夏',
                                    'percent ': 0.04
                                },
                                'group': 'noGroup',
                                'label': {
                                    'normal': {}
                                },
                                'labelLine': {
                                    'length': 0,
                                    'normal': {
                                        'show': true
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'name': '青海',
                                'value': 3.16,
                                'dataObj': {
                                    'color': 3,
                                    'diffv': null,
                                    'idx': 31,
                                    'value': 3.16,
                                    'prov_id': '630000',
                                    'name': '青海',
                                    'percent ': 0.02
                                },
                                'group': 'noGroup',
                                'label': {
                                    'normal': {}
                                },
                                'labelLine': {
                                    'length': 0,
                                    'normal': {
                                        'show': true
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            }
                        ]
                    }
                ],
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
                'textStyle': {
                    'fontFamily': 'Microsoft YaHei',
                    'fontSize': '12'
                }
            }
            this.EC.setOption(obj)
        }
    }
}
</script>

<style lang="css">

</style>
