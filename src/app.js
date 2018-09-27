import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index/index'
import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/indexa/indexa'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'TODO List',
      navigationBarTextStyle: 'black'
    }
  }
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
