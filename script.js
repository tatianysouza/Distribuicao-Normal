var chart;

function gerarGrafico() {
    var media = document.getElementById("media").value;
    var desvio = document.getElementById("desvio").value;

    if (isNaN(media) || isNaN(desvio)) {
        alert("Por favor, insira números válidos para média e desvio padrão.");
        return;
    }

    function normal(x) {
        return (1 / (desvio * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - media) / desvio, 2));
    }

    function acumulado(x) {
        return 0.5 * (1 + math.erf((x - media) / (Math.sqrt(2) * desvio)));
    }

    var ctx = document.getElementById('grafico').getContext('2d');

    if (chart) {
        chart.data.datasets[0].data = Array.from({ length: 50 }, (_, i) => normal(i - 20));
        chart.data.datasets[1].data = Array.from({ length: 50 }, (_, i) => acumulado(i - 20));
        chart.update();
    } else {
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({ length: 50 }, (_, i) => i - 20),
                datasets: [{
                    label: 'Distribuição Normal',
                    data: Array.from({ length: 50 }, (_, i) => normal(i - 20)),
                    borderColor: 'rgb(75, 192, 192)',
                    fill: false
                },
                {
                    label: 'Frequência Acumulada',
                    data: Array.from({ length: 50 }, (_, i) => acumulado(i - 20)),
                    borderColor: 'rgb(255, 99, 132)',
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
