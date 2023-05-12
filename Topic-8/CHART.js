document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'peterson',
            data: [2, 4, 6]
        }, {
            name: 'max',
            data: [9, 8, 7]
        }]
    });
});
