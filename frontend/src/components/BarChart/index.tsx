import Chart from 'react-apexcharts';

function BarChart() {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {//mock são dados de mentira que não estão no banco de dados; dados estáticos
        labels:
        {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: //isso é uma lista; aceita mais de um conjunto de dados e aqui no caso é apenas 1
        [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
            }
        ]
    };//aqui antes colocamos a lógica 

    return (
        <Chart 
            options={{...options, xaxis: mockData.labels}}/*no react quando colocamos uma variável entre chaves, ela será incorporada na minha definição e está sendo referenciada nesse local; Os 3 pontinhos pega todo mundo que já tem o options, reaproveita ele e inclue mais coisas no objeto; o que vem depois da vírgula são as inclusões; no xaxis falamos o que tem no eixo x */
            series = {mockData.series}//esses são os meus valores
            type = "bar" //tipo do gráfico; é barras
            height = "240" //altura do gráfico
        />
    );/*e retornamos a estrutura jsx; essa estrutura é um componente que faz parte da biblioteca apechart que é apenas <chart>
    esse chart tem alguns parâmetros, sendo eles: options e series*/

}

export default BarChart;
