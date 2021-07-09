import React, { Component, createRef } from "react";
import { Card } from "antd";
import * as echarts from "echarts";

var option = {
  title: {
    text: "ECharts 入门示例",
  },
  tooltip: {},
  legend: {
    data: ["销量"],
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};
class Dashboard extends Component {
  constructor() {
    super();
    this.amountRef = createRef();
  }
  componentDidMount() {
    const ets = echarts?.init(this.amountRef.current);
    ets.setOption(option);
  }
  render() {
    return (
      <Card>
        <div ref={this.amountRef} style={{ height: "300px" }}></div>
      </Card>
    );
  }
}
export default Dashboard;
