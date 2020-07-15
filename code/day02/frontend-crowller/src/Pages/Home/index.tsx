import React, { Component } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import * from 'echarts';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment';
import './style.css';

/* // const Home: () => JSX.Element = () => {
const Home: React.FC = () => {
  return (
    <div className="home-page" style={{ padding: '2px', display: 'flex', justifyContent: 'space-around'}}>
      <Button type="primary">爬取</Button>
      <Button type="primary">展示</Button>
      <Button type="primary">退出</Button>
    </div>
  )
} */

// 泛型：this.state有提示
// interface State {
//   isLogin: boolean
// }
interface CourseItem {
  title: string;
  rank: number;
}

interface State {
  loaded: boolean;
  isLogin: boolean;
  data: {
    [key: string]: CourseItem[]
  };
}

interface LineData {
  name: string;
  type: string;
  data: number[];
}

// class Home extends Component<{}, State> {
class Home extends Component {
  // constructor(props: {}) {
  //   super(props);
  //   this.state = {
  //     isLogin: true
  //   };
  // }

  // 简化(state直接为一个对象，复写掉原来泛型中内容)
  state: State = {
    // 根目录跳转抖动：默认isLogin为true,会显示内容然后重定向
    loaded: false,
    isLogin: true,
    data: {}
  }

  handleLogout = () => {
    axios.get('/api/logout').then(res => {
      if (res.data?.data) {
        this.setState({
          isLogin: false
        })
      } else {
        message.error('登出失败')
      }
    })
  }

  handleCrowller = () => {
    axios.get('/api/getData').then(res => {
      if (res.data?.data) {
        this.setState({
          data: res.data.data
        })
      }
    })
  }

  getOptions: () => echarts.EChartOption = () => {
    const { data } = this.state
    const courseNames: string[] = []
    const times: string[] = []
    const tempData: {
      [key: string]: number[]
    } = {}
    for (let i in data) {
      const item = data[i]
      times.push(moment(Number(i)).format('MM-DD HH:mm'))
      item.forEach(innerItem => {
        const { title, rank } = innerItem
        if (courseNames.indexOf(title) === -1) {
          courseNames.push(title)
        }
        tempData[title] ? tempData[title].push(rank) : (tempData[title] = [rank])
      })
    }
    const result: LineData[] = []
    for (let i in tempData) {
      result.push({
        name: i,
        type: 'line',
        data: tempData[i]
      })
    }
    console.log(result)
    return  {
      title: {
          // text: {123: 'abc'}
          text: '热搜排行数据展示'
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: courseNames
      },
      grid: {
          left: '3%',
          right: '6%',
          bottom: '3%',
          containLabel: true
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: times
      },
      yAxis: {
          type: 'value'
      },
      series: result
    };
  
  }

  componentDidMount() {
    axios.get('/api/isLogin').then(res => {
      console.log(res)
      // if (res.data?.data) {
      //   console.log('已登录')
      // } else {
      //   console.log('未登录')
      // }
      if (!res.data?.data) {
        this.setState({
          isLogin: false,
          loaded: true
        })
      } else {
        this.setState({
          loaded: true
        })
      }
    });

    axios.get('/api/showData').then(res => {
      if (res.data?.data) {
        // console.log(res.data.data)
        this.setState({
          data: res.data.data
        })
      }
    });
  }

  render() {
    const { isLogin, loaded } = this.state
    if (isLogin) {
      if (loaded) {
        return (
          <div className="home-page">
            <div className="btns">
              <Button type="primary" onClick={this.handleCrowller}>爬取</Button>
              <Button type="primary" onClick={this.handleLogout}>退出</Button>
            </div>
            <ReactEcharts className="echarts" option={this.getOptions()} />
          </div>
        )
      }
      return null
    }
    return <Redirect to="/login"></Redirect>
  }
}

export default Home;