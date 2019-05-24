import Taro, { Component, Config } from '@tarojs/taro'
import { Button, View, RichText } from '@tarojs/components'
import parse from 'mini-html-parser2'
import './index.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      nodes: []
    }
  }

  componentWillMount () {
    const str = '<div>Hello world!</div>'
    parse(str, (err, nodes) => {
      if (!err) {
        this.setState({nodes})
      }
    })
  }
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClickAlipay = () => {
    console.log('onClickAlipay')
    Taro.navigateTo({
      url: '/pages/alipay/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <RichText nodes={nodes} />
        <Button onClick={this.onClickAlipay.bind(this)}>点击进入支付宝小程序问题页</Button>
      </View>
    )
  }
}
