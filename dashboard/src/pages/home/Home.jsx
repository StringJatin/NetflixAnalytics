import React from 'react'
import "./Home.css"
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { data } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={data} title="User Analytics" grid dataKey="uv" size={4/1}
      />
      <div className='homeWidgets'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
