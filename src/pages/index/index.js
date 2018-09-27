import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import Tab from '../../components/tab/tab'
import Indexa from '../indexa/indexa'

import { increment, decrement, asyncInc } from '../../actions/counter'

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   inc() {
//     dispatch(increment())
//   },
//   dec() {
//     dispatch(decrement())
//   },
//   asyncInc() {
//     dispatch(asyncInc())
//   }
// }))
class Index extends Component {
  goOtherPages=(url)=>{
    Taro.navigateTo({url:url})
  }
  render() {
    return (
      <View className='todo'>
        <Button className='add_btn' onClick={this.props.inc}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncInc}>async</Button>
        <Button>index页:{this.props.counter.num}</Button>
        <Button onClick={this.goOtherPages.bind(this,"../indexa/indexa")}>goto indea页面</Button>
        <Tab t={2} />
        <Indexa />
      </View>
    )
  }
}
// export default Index
export default connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  inc() {
    dispatch(increment())
  },
  dec() {
    dispatch(decrement())
  },
  asyncInc() {
    dispatch(asyncInc())
  }
}))(Index)
