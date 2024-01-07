import React, { useEffect, useMemo, useState } from "react";
import "./Home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { data } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

import axios from "axios";

const Home = () => {
  const [userStats, setUserStats] = useState();
  const MONTHS = useMemo(() => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[]
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODljZGI0NDBmNjRjMzM4NGY3NjE0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDY0NzA3MywiZXhwIjoxNzA1MDc5MDczfQ.0N8oFvp9QfdxYHej1TUkdvW1IMahTScG0HxDFl53pe8",
          },
        });
        const statsList = res.data.sort(function(a,b){
          return a._id - b._id;
        });
        statsList.map((item) =>
  setUserStats((prev) => (prev ? [...prev, { name: MONTHS[item._id - 1], "New User": item.total }] : [{ name: MONTHS[item._id - 1], "New User": item.total }]))
);
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="New User"
        size={4 / 1}
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
