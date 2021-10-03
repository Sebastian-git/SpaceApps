import React, { Component } from "react"
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from "recharts"
import { format, parseISO, subDays } from "date-fns"

import IrradianceData from "../data/irradiance.json"


class SunshineGraph extends Component {

  constructor() {
    super()
    this.currentValue = 70
  }

  HoverInfo = ({active, payload, label}) => {
    if (active) {
      if (this.currentValue !== payload[0].value) {
        this.currentValue = (payload[0].value * 9/5 * 100) + 32
      }
      
      return (
      <div className="tooltip">
          <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
          <p>{(payload[0].value.toFixed(2))} W/m<sup>2</sup> </p>
      </div>
      );
    }
    return null;
  }

  render() {

    let irrData = JSON.stringify(IrradianceData, null, 1)
    let splitData = irrData.split(/\r?\n/).slice(13, 4183)

    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear()
    today = yyyy + mm + dd

    let value
    const data = []

    for (let i = 0; i < 7; i++) {
      value = splitData[i].substring(16, 20)
      if (!/\d/.test(value[value.length - 1])) {
        value = splitData[i].substring(16, 19)
      }
      value = parseFloat(value)

      data.push({
        date: subDays(new Date(), i).toISOString().substr(0, 20),
        value: value
      });
    }

    return (
        <ResponsiveContainer width="95%" height={500} >
          <AreaChart data={data} >

            <defs>
              <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                <stop offset="90%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <Area dataKey="value" stroke="#2451B7" fill="url(#gradientColor)" />

            <XAxis
              dataKey="date"
              axisLine={true}
              tickLine={true}
              tickFormatter={(str) => {
                  return "" 
              }}
            />

            <YAxis
              datakey="value"
              axisLine={false}
              tickLine={false}
              tickCount={0}
              tickFormatter={(number) => `${number.toFixed(2)}`}
            />

            <Tooltip content={this.HoverInfo} />

            <CartesianGrid opacity={0.2} vertical={false} />
            
          </AreaChart>
        </ResponsiveContainer>
    )
  }
}

export default SunshineGraph