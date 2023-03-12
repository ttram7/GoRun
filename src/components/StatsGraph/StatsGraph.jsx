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
  const weeklyRunList = useSelector(store => store.weeklyRunList);
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [chartOptions, setChartOptions] = useState({});
  const dispatch = useDispatch();
  const [select, setSelect] = useState('');
  
  useEffect(() => {
    // setGraph(weeklyRunList)
    setGraph();
  }, []) //select in []
  
  const setGraph = () => {
    console.log('weeklyRunList', weeklyRunList)
    console.log('select',select)
    const dowList = ['M', 'T', 'W', 'TH', 'F', 'SA', 'SU']
    let dataList = [];
    
    // //if (select === '' || select === "week") {
    //   let i = 0;
    //   let j = 0;
    //   while (i < dowList.length) {
    //     while (j < weeklyRunList.length) {
    //       if (dowList[i] === weeklyRunList[j].dow_name) {
    //         dataList.push(weeklyRunList[j].distance)
    //         j++;
    //       } else {
    //         dataList.push(0)
    //       }
    //   i++;
    //   }
    // }
  //}
    let i = 0;
    let j = 0;
    while (i < dowList.length) {
      while (j < weeklyRunList.length) {
          if (dowList[i] === weeklyRunList[j].dow_name) {
            dataList.push(weeklyRunList[j].distance)
            j++;
          }
          else {
            dataList.push(0)
          }
      i++;
      }
  }
    if (select === 'month') {
      dataList = [1, 2, 3, 4, 5, 6, 7]
    }
    
    console.log('testList: ',dataList)

    setChartData({
        labels:['M', 'T', 'W', 'TH', 'F', 'SA', 'SU'],
        datasets: [
          {
            label: 'Distance',
            //data: weeklyRunList.map((run) => run.distance),
            data: dataList,
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
            // text: `Distances for this ${select}`,
          },
        },
      });
}
 //console.log(weeklyRunList)
 

 function updateChart(option) {

 }

 const getSum = () => {
  let weekSum = 0
  for (let k = 0; k < weeklyRunList.length; k++) {
    weekSum+=weeklyRunList[k].distance
  }
  //console.log(weekSum)
  return weekSum;
 }
return (
      <div>
        <h3>Stats Graph</h3>
        <select id="time-period" onChange= {(e) => setSelect(e.target.value)}>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
        {/* <h1>{select}</h1> */}
        <div className="bar-chart">
          <Bar options={chartOptions} data={chartData}/>
        </div>
        <div className='totalStats'>
          <p>Total miles: {getSum()} </p>
          <p>Total runs: {weeklyRunList.length} </p>
        </div>
      </div>
   
    );
}

export default StatsGraph;