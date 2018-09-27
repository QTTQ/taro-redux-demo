import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import Tab from '../../components/tab/tab'

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
class Indexa extends Component {
  render() {
    return (
      <View className='todo'>
        <Button className='add_btn' onClick={this.props.inc}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncInc}>async</Button>
        <Button>indexa页面:{this.props.counter.num}</Button>
        <Tab t={1} />
      </View>
    )
  }
}
// export default Main
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
}))(Indexa)
