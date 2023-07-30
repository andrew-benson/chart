const { log, error } = console;

const getData = async () => {
  const resp = await fetch('https://tradeapi-dev-ukw-01.azurewebsites.net/candles');
  const data = await resp.json();
  log(data)
  return data;
};

const renderChart = async () => {
  const chartProperties = {
    timeScale: {
      timeVisible: true,
      secondsVisible: true,
    },
    pane: 0,
  };
  const domElement = document.getElementById('tvchart');
  const chart = LightweightCharts.createChart(domElement, chartProperties);
  const candleseries = chart.addCandlestickSeries();
  const klinedata = await getData();
  candleseries.setData(klinedata);
};

renderChart();
