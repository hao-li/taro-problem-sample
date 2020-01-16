import Taro, { Component, Config } from '@tarojs/taro'
import { AtInput, AtTabs, AtTabsPane } from 'taro-ui'
import { View } from '@tarojs/components'
import Dmy from "../../components/common/dmy";
import './index.scss'

export default class Swan extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '字节跳动小程序问题页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      inputValue: '',
      tabs: {
        currentTab: 0,
        list: [],
      }
    }
  }


  componentWillMount () {
    this.setState({
      tabs: {
        currentTab: 0,
        list: [{
          title: 'A',
          content: [
            'A'
          ]
        },
        {
          title: 'B',
          content: [
            'B'
          ]
        }],
      }
    })
  }
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {}

  componentDidHide () { }

  handleClickTab = (index) => {
    let tabs = this.state.tabs
    tabs.currentTab = index
    this.setState({tabs})
  }

  handleInputChange (value) {
    this.setState({
      inputValue: value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }

  render () {
    const {tabs} = this.state
    return (
      <View className='tt'>
        <AtTabs current={tabs.currentTab} tabList={tabs.list} onClick={this.handleClickTab.bind(this)} swipeable>
          {
            tabs.list.map((t, i) => {
              return <AtTabsPane current={tabs.currentTab} index={i}>
                <View><Dmy content={t.content}/></View>
              </AtTabsPane>
            })
          }
        </AtTabs>
        <AtInput
          name='value'
          title='标准五个字'
          type='text'
          placeholder='标准五个字'
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
      </View>
    )
  }
}
