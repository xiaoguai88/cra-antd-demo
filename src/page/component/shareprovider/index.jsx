import React,{Component,createContext} from 'react';
//Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法
// console.log(createContext())
let counterContext = createContext();
const {
  Provider, //提供者（提供数据的）
  Consumer  //消费者 （消费Provider所提供的数据value）
} = counterContext

class CounterProvider extends Component{
  constructor(){
    super()
    //所有的CounterProvider的后代组件都可以共享的状态
    this.state = {
      count:100
    }
  }
  incrementCount = ()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  decrementCount = ()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  render(){ //Provider需要写一个value属性，value就是给Consumer提供的数据或者方法
    return (
      <Provider value={{
        count:this.state.count,
        incrementCount:this.incrementCount,
        decrementCount:this.decrementCount
      }} cct = {this.counterContext}>
        {this.props.children}
      </Provider>
    )
  }
}







export default CounterProvider;
