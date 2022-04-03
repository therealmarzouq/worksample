import React from 'react'
import { LineChart } from '../../common'
import { Calendar } from '../../icons'
import './EfficiencyCard.css'

const EfficiencyCard = ({ ...props }) => {
  const { data } = props
  return (
    <div className="efficiency-card">
      <div className="efficiency-card__line-chart-section">
        <div className="efficiency-card__line-chart-section-heading">
          <div className="flex items-center">
            <h4 className="efficiency-card__change-criteria">
              {data.criteria}
            </h4>
            <div className="efficiency-card__change-value">{data.change}</div>
          </div>
          <div className="efficiency-card__status/filter">
            <div
              className="efficiency-card__status--legend"
              style={{ backgroundColor: data.color }}
            ></div>
            <p className="efficiency-card__status">High Priority</p>
            <div className="relative">
              <input
                className="efficiency-card__filter"
                placeholder="This Month"
                type="text"
              />
              <Calendar className="efficiency-card__filter-icon" />
            </div>
          </div>
        </div>
        <div className="pb-2 h-64 w-full">
          <LineChart
            chartData={data.data}
            color={data.color}
            criteria={data.criteria}
          />
        </div>
      </div>
      <div className="efficiency-card__time-card-section">
        {data.timing.map((item) => {
          return (
            <div className="efficiency-card__time-card">
              <p className="efficiency-card__time-card-title">
                {item.criteria}
              </p>
              <h1 className="efficiency-card__time-card-value">{item.value}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EfficiencyCard
