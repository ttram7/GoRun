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
  //const last week run list
  const weeklyRunList = useSelector(store => store.weeklyRunList);
  const monthlyRunList = useSelector(store => store.monthlyRunList);

  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [chartOptions, setChartOptions] = useState({});
  
  const [select, setSelect] = useState('week');
  
  // useEffect triggered when select value changes
  useEffect(() => {
    setGraph();
  }, [select]) 
  
  const setGraph = () => {
    console.log('select',select)
    console.log('monthlist', monthlyRunList)
    const dowList = ['M', 'T', 'W', 'TH', 'F', 'SA', 'SU']
    let dataList = [];
    let labelList = [];
    
    if (select === '' || select === "week") {
      let i = 0;
      let j = 0;
      labelList = dowList
      if (weeklyRunList.length > 0) {
        while (i < dowList.length) {
          while (j < weeklyRunList.length) {
            console.log('label list index:',i, labelList[i])
            console.log('week index:',j, weeklyRunList[j].dow_name)
            if (dowList[i] === weeklyRunList[j].dow_name) {
              dataList.push(weeklyRunList[j].distance)
              j++;
            } else {
              dataList.push(0)
            } if (j >= weeklyRunList.length) {
              i = labelList.length;
            }
          i++;
          }
        } 
      }
  }
  
    if (select === 'month') {
      labelList = [...Array(32).keys()];
      labelList.shift();
    
      let l = 0;
      let m = 0;
    
      if (monthlyRunList.length > 0) {
        while (l < labelList.length) {
          while (m < monthlyRunList.length) {
            console.log('label list index:',l, labelList[l])
            console.log('month index:',m, monthlyRunList[m].day)
            if (labelList[l] == monthlyRunList[m].day) {
              dataList.push(monthlyRunList[m].distance)
              m++;
            } else {
              dataList.push(0)
            }
          if (m >= monthlyRunList.length) {
            l = labelList.length;
          }
          l++;
          }
        }
      }
    }
  console.log(dataList)
    
    setChartData({
        labels: labelList,
        datasets: [
          {
            label: 'Distance',
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
            text: `Distances for this ${select}`,
          },
        },
      });
  }

 const getSum = () => {
  if (select === 'week') {
    let weekSum = 0
    for (let k = 0; k < weeklyRunList.length; k++) {
      weekSum+=weeklyRunList[k].distance
    }
    return weekSum;
  }
  if (select === 'month') {
    let monthSum = 0
    for (let n = 0; n < monthlyRunList.length; n++) {
      monthSum+=monthlyRunList[n].distance
    }
    return monthSum;
  }
}
  const getTotalRuns = () => {
    if (select === 'week') {
      return weeklyRunList.length;
    }
    if (select === 'month') {
      return monthlyRunList.length;
    }
  }

return (
      <div>
        <h3>Stats Graph</h3>
        <select id="time-period" onChange= {(e) => setSelect(e.target.value)}>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
        <div className="bar-chart">
          <Bar options={chartOptions} data={chartData}/>
        </div>
        <div className='totalStats'>
          <p>Total miles: {getSum()} </p>
          <p>Total runs: {getTotalRuns()} </p>
        </div>
      </div>
   
    );
}

export default StatsGraph;