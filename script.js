var chart;

function gerarGrafico() {
    var media = document.getElementById("media").value;
    var desvio = document.getElementById("desvio").value;

    function normal(x) {
        return (1 / (desvio * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - media) / desvio, 2));
    }

    var ctx = document.getElementById('grafico').getContext('2d');

    if (chart) {
        chart.data.datasets[0].data = Array.from({ length: 100 }, (_, i) => normal(i - 50));
        chart.update();
    } else {
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({ length: 100 }, (_, i) => i - 50),
                datasets: [{
                    label: 'Distribuição Normal',
                    data: Array.from({ length: 100 }, (_, i) => normal(i - 50)),
                    borderColor: 'rgb(75, 192, 192)',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'X'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Probabilidade'
                        }
                    }
                }
            }
        });
    }
}