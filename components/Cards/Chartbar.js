import React from 'react'
import { Line } from 'react-chartjs-2';
import {Chart, ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chartbar = function() {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgb(11,227,210)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,0,54,0.4)',
        hoverBorderColor: 'rgb(0,88,101)',
        fillColor: "#68f7f7",
        strokeColor: "#ffb88c",
        pointColor: "#fff",
        pointStrokeColor: "#ffb88c",
        pointHighlightFill: "#ffb88c",
        pointHighlightStroke: "#fff",
        data: [0, 10, 5, 2, 20, 30, 45],
      }
    ]
  };


  return (
    <div >
<div className='ml-5  md:max-w-4xl max-w-4xl bg-white w-full rounded-lg shadow-xl'>
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </div>
    </div>
  )
}

export default Chartbar
 




