import {Line} from "react-chartjs-2";
import {
Chart as ChartJS,
LineElement,
CategoryScale,
LinearScale,
PointElement
} from "chart.js";

ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement);

export default function PerformanceChart(){

const data = {
labels:["9am","10am","11am","12pm","1pm"],
datasets:[
{
label:"Temperature",
data:[28,29,30,31,32]
},
{
label:"pH",
data:[6,7,7.5,8,8.1]
}
]
};

return(
<div className="bg-white p-4 rounded-xl shadow">
<Line data={data}/>
</div>
);

}