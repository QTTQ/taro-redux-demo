import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button } from '@tarojs/components'

import './tab.scss'

import { increment, decrement, asyncInc } from '../../actions/counter'
// @connect(({ counter }) => {
//   console.log(counter,"000000000000000000000");
//   return {counter}
// }, (dispatch) => ({
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
class Tab extends Component {

  render() {
    return (
      <View className='tab'>
        <Button className='add_btn' onClick={this.props.inc}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncInc}>async</Button>
        <Button>tab页:{this.props.counter.num}</Button>
        {/* <Button onClick={this.handler}>componentTab{this.props.t}</Button> */}
      </View>
    )
  }
}
// export default Tab
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
}))(Tab)
