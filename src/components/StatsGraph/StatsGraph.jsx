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
  console.log(runList);
  //const [heading, setHeading] = useState('Functional Component');

  const [weeklyRunList, setWeeklyRunList] = useState([]);

  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    fetchWeeklyRuns();
    //if (weeklyRunList.length > 0) {
    //setGraph();
    //}
  }, [])

  // useEffect(() => {
  //   setGraph();
  // }, [])

  const fetchWeeklyRuns = () => {
    console.log('in fetch weekly runs')
    axios.get('/api/week-runs')
    .then((response) => {
      console.log('response from week stats', response.data);
      setGraph(response.data);
      setWeeklyRunList(response.data);
      //setChartData(response.data);
      console.log('weekList', response.data)
    })
    .catch((error) => {
      console.log("error getting week stats", error);
    });
  }
  
  // useEffect(() => {
  //   fetchWeeklyRuns();
  //   //if (weeklyRunList.length > 0) {
  //   //setGraph();
  //   //}
  // }, [])

  // useEffect(() => {
  //   setGraph();
  // }, [])


//     if (weeklyRunList.length > 0) {
//     setChartData({
//         //labels: 'M, T, W',
//         //labels:['M', 'T', 'W', 'TH'],
//         labels:['M', 'T', 'W', 'TH', 'F', 'S', 'S'],
//         datasets: [
//           {
//             label: 'Distance',
//             data: weeklyRunList.map((run) => run.distance),
//             //data: chartData.map(run => run.distance),
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//           }
//         ]
//       });
//       setChartOptions({
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top'
//           },
//           title: {
//             display: true,
//             text: 'Chart.js Bar Chart',
//           },
//         },
//       });
      
// }}, []);
//}, []);

 const setGraph = (weeklyRunList) => {
  
    setChartData({
        //labels: 'M, T, W',
        //labels:['M', 'T', 'W', 'TH'],
        labels:['M', 'T', 'W', 'TH', 'F', 'S', 'S'],
        datasets: [
          {
            label: 'Distance',
            data: weeklyRunList.map((run) => run.distance),
            //data: chartData.map(run => run.distance),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
            text: 'Chart.js Bar Chart',
          },
        },
      });
      
}
 
return (
  <>
      {weeklyRunList.length > 0 &&
      <div>
        <h3>Stats Graph</h3>
        <div className="bar-chart">
          <Bar options={chartOptions} data={chartData}/>
        </div>
      </div>
    }
    </>
    );

}

export default StatsGraph;