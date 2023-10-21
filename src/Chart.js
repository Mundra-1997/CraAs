import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Filler,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from 'chart.js';


ChartJS.register(
    LineElement,
    CategoryScale,
    Legend, Filler,
    Tooltip,
    LinearScale,
    PointElement
);



const Chart = ({length,emiArray}) => {

console.log(emiArray,"emi array in chart")
const data1  = emiArray.map((ar)=>ar);
let labels = emiArray.map((ar,i)=> i.toString());
    const data = {
        labels,
        datasets: [{
            data: data1,
            label:"data",
            backgroundColor:'rgba(0, 0, 255, 0.3)',
            borderColor: "black",
            pointBackgroundColor: 'grey',
        
            tension: 0.6
        }]
    };

   const options = {
        plugins: {
            legend: {
                display: true
                
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                   
                }
            }
        }
    };

// console.log(data)
  return (
    <div>
      {length > 0 && <div><Line  style={{ width: "300px", height: "400px" }} data={data} options={options} /></div>}
    </div>
  )
}

export default Chart
