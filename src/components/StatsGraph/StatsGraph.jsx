import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,// x axis
    LinearScale, // y axis
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function StatsGraph() {
  const runList = useSelector(store => store.runList);
  const [weeklyRunList, setWeeklyRunList] = useState([]);

  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    fetchWeeklyRuns();
  }, [])

  const fetchWeeklyRuns = () => {
    console.log('in fetch weekly runs')
    axios.get('/api/week-runs')
    .then((response) => {
      console.log('response from week stats', response.data);
      setGraph(response.data);
      //setWeeklyRunList(response.data);
      //setChartData(response.data);
      console.log('weekList', response.data)
    })
    .catch((error) => {
      console.log("error getting week stats", error);
    });
  }

 const setGraph = (weeklyRunList) => {
    console.log('weeklyRunList', weeklyRunList)
    const distanceList = weeklyRunList.map((run) => run.distance)
    console.log('distanceList', distanceList) // output: [3, 3, 2]


    
    setChartData({
        labels:['M', 'T', 'W', 'TH', 'F', 'S', 'S'],
        datasets: [
          {
            label: 'Distance',
            data: weeklyRunList.map((run) => run.distance),
            //data: chartData.map(run => run.distance),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: '#3395ef',
          }
        ]
      });
      setChartOptions({
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Distances for this week',
          },
        },
      });
}
 
return (
  <>
      {/* {weeklyRunList.length > 0 && */}
      <div>
        <h3>Stats Graph</h3>
        <div className="bar-chart">
          <Bar options={chartOptions} data={chartData}/>
        </div>
      </div>
    {/* } */}
    </>
    );

}

export default StatsGraph;