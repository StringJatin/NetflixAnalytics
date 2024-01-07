import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({title,data,dataKey,grid,size}) {
  console.log("aspect",size);
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <div className="chartDiv">
      <ResponsiveContainer width="100%" aspect={size}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" /> }  
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}