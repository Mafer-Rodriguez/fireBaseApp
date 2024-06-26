// Create Temperature Chart
//charts-definition.js
function createTemperatureChart() {
    var chart = new Highcharts.Chart({
        time: {
            useUTC: false
        },
        chart: {
            renderTo: 'chart-temperature',
            type: 'spline'
        },
        series: [
            {
                name: 'BME280'
            }
        ],
        title: {
            text: undefined
        },
        plotOptions: {
            line: {
                animation: false,
                dataLabels: {
                    enabled: true
                }
            }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { second: '%H:%M:%S' }
        },
        yAxis: {
            title: {
                text: 'Temperature Celsius Degrees'
            }
        },
        credits: {
            enabled: false
        }
    });
    return chart;
}

// Create Humidity Chart
function createHumidityChart() {
    var chart = new Highcharts.Chart({
        time: {
            useUTC: false
        },
        chart: {
            renderTo: 'chart-humidity',
            type: 'spline'
        },
        series: [{
            name: 'BME280'
        }],
        title: {
            text: undefined
        },
        plotOptions: {
            line: {
                animation: false,
                dataLabels: {
                    enabled: true
                }
            },
            series: {
                color: '#50b8b4'
            }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { second: '%H:%M:%S' }
        },
        yAxis: {
            title: {
                text: 'Humidity (%)'
            }
        },
        credits: {
            enabled: false
        }
    });
    return chart;
}

// Create Pressure Chart
function createPressureChart() {
    var chart = new Highcharts.Chart({
        time: {
            useUTC: false
        },
        chart: {
            renderTo: 'chart-pressure',
            type: 'spline'
        },
        series: [{
            name: 'BME280'
        }],
        title: {
            text: undefined
        },
        plotOptions: {
            line: {
                animation: false,
                dataLabels: {
                    enabled: true
                }
            },
            series: {
                color: '#A62639'
            }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { second: '%H:%M:%S' }
        },
        yAxis: {
            title: {
                text: 'Pressure (hPa)'
            }
        },
        credits: {
            enabled: false
        }
    });
    return chart;
}