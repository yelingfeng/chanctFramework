<template >
    <div class="chart" ref="chart" :style="styleObj"></div>
</template>
<script>
export default {
    name: 'chart01',
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
                'legend': {
                    'show': false,
                    'left': 'left',
                    'top': 'top',
                    'textStyle': {
                        'color': '#00d8f1',
                        'fontFamily': 'Microsoft YaHei'
                    },
                    'itemWidth': 16,
                    'itemHeight': 3,
                    'itemGap': 6
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
                'yAxis': [
                    {
                        'name': '',
                        'type': 'category',
                        'nameTextStyle': {
                            'color': '#9ecae1'
                        },
                        'data': [
                            '20',
                            '19',
                            '18',
                            '17',
                            '16',
                            '15',
                            '14',
                            '13',
                            '12',
                            '11',
                            '10',
                            '9',
                            '8',
                            '7',
                            '6',
                            '5',
                            '4',
                            '3',
                            '2',
                            '1'
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
                            'interval': 0,
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
                'series': [
                    {
                        'type': 'bar',
                        'data': [
                            {
                                'value': '0.13',
                                'desc': '搜索工具',
                                'name': '搜索工具',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '20',
                                    'value': '0.13',
                                    'service_group_id': '12',
                                    'name': '搜索工具'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '0.13',
                                'desc': '数据库',
                                'name': '数据库',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '19',
                                    'value': '0.13',
                                    'service_group_id': '16',
                                    'name': '数据库'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '0.13',
                                'desc': '电子邮件',
                                'name': '电子邮件',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '18',
                                    'value': '0.13',
                                    'service_group_id': '10',
                                    'name': '电子邮件'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '0.15',
                                'desc': '移动互联网阅读',
                                'name': '移动互联网阅读',
                                'info': '',
                                'dataObj': {
                                    'color': '#4F438C',
                                    'ordernum': '17',
                                    'value': '0.15',
                                    'service_group_id': '24',
                                    'name': '移动互联网阅读'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '0.27',
                                'desc': '音乐',
                                'name': '音乐',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '16',
                                    'value': '0.27',
                                    'service_group_id': '9',
                                    'name': '音乐'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '0.34',
                                'desc': '门户网站',
                                'name': '门户网站',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '15',
                                    'value': '0.34',
                                    'service_group_id': '4',
                                    'name': '门户网站'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '0.37',
                                'desc': '微博',
                                'name': '微博',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '14',
                                    'value': '0.37',
                                    'service_group_id': '6',
                                    'name': '微博'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '0.54',
                                'desc': '网络安全',
                                'name': '网络安全',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '13',
                                    'value': '0.54',
                                    'service_group_id': '15',
                                    'name': '网络安全'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '0.59',
                                'desc': '移动互联网即时通信',
                                'name': '移动互联网即时通信',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '12',
                                    'value': '0.59',
                                    'service_group_id': '23',
                                    'name': '移动互联网即时通信'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '2.07',
                                'desc': '文件传输',
                                'name': '文件传输',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '11',
                                    'value': '2.07',
                                    'service_group_id': '3',
                                    'name': '文件传输'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '2.85',
                                'desc': '移动互联网VoIP业务',
                                'name': '移动互联网VoIP业务',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '10',
                                    'value': '2.85',
                                    'service_group_id': '32',
                                    'name': '移动互联网VoIP业务'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '3.04',
                                'desc': '即时通信',
                                'name': '即时通信',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '9',
                                    'value': '3.04',
                                    'service_group_id': '2',
                                    'name': '即时通信'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '3.07',
                                'desc': '终端控制',
                                'name': '终端控制',
                                'info': '',
                                'dataObj': {
                                    'color': '#77D011',
                                    'ordernum': '8',
                                    'value': '3.07',
                                    'service_group_id': '17',
                                    'name': '终端控制'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '3.98',
                                'desc': '其他移动互联网应用',
                                'name': '其他移动互联网应用',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '7',
                                    'value': '3.98',
                                    'service_group_id': '38',
                                    'name': '其他移动互联网应用'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '6.16',
                                'desc': '视频',
                                'name': '视频',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '6',
                                    'value': '6.16',
                                    'service_group_id': '8',
                                    'name': '视频'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '8.9',
                                'desc': '通用协议',
                                'name': '通用协议',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '5',
                                    'value': '8.9',
                                    'service_group_id': '1',
                                    'name': '通用协议'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '9.58',
                                'desc': '网络游戏',
                                'name': '网络游戏',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '4',
                                    'value': '9.58',
                                    'service_group_id': '14',
                                    'name': '网络游戏'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '10.47',
                                'desc': '下载工具',
                                'name': '下载工具',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '3',
                                    'value': '10.47',
                                    'service_group_id': '11',
                                    'name': '下载工具'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '19.1',
                                'desc': '传统互联网应用',
                                'name': '传统互联网应用',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '2',
                                    'value': '19.1',
                                    'service_group_id': '20',
                                    'name': '传统互联网应用'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            },
                            {
                                'value': '27.88',
                                'desc': '其他HTTP应用',
                                'name': '其他HTTP应用',
                                'info': '',
                                'dataObj': {
                                    'ordernum': '1',
                                    'value': '27.88',
                                    'service_group_id': '19',
                                    'name': '其他HTTP应用'
                                },
                                'label': {
                                    'normal': {
                                        'show': true,
                                        'position': 'right',
                                        'textStyle': {
                                            'color': '#00CAE5'
                                        }
                                    },
                                    'emphasis': {
                                        'show': true
                                    }
                                }
                            }
                        ],
                        'itemStyle': {
                            'emphasis': {
                                'color': '#00ccff'
                            }
                        },
                        'barWidth': ''
                    }
                ],
                'textStyle': {
                    'fontFamily': 'Microsoft YaHei'
                },
                'barMaxWidth': 25
            }
            this.EC.setOption(obj)
        }
    }
}
</script>

<style lang="css">

</style>
