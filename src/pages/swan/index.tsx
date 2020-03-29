import Taro, { Component, Config } from '@tarojs/taro'
import { AtInput, AtTabs, AtTabsPane, AtFab } from 'taro-ui'
import { Swiper, SwiperItem, View, RichText } from '@tarojs/components'
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
    navigationBarTitleText: '百度小程序问题页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      inputValue: '',
      tab: {
        currentTab: 0,
        list: [{title: 'A'}, {title: 'B'}],
        content: [
          '<div><div>A begin</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div>A end</div></div>',
          '<div><div>B begin</div><div>B end</div></div>'
        ]
      }
    }
  }


  componentWillMount () {
    console.log('componentWillMount')
  }
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    console.log('componentDidShow')
  }

  componentDidHide () { }

  handleClickTab = (index) => {
    let tab = this.state.tab
    tab.currentTab = index
    this.setState({tab: tab})
  }

  handleInputValueChange = (value) => {
    console.log('handleInputValueChange', value)
    this.setState({inputValue: value})
    return value
  }

  render () {
    const {inputValue: inputValue, tab} = this.state
    return (
      <View className='swan'>
        <Swiper
          className='swiper'
          displayMultipleItems={1.5}
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots>
          <SwiperItem>
            <View className='demo-text-1'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-4'>4</View>
          </SwiperItem>
        </Swiper>
        <View>下方这个 at-input 如果无法输入内容则不正常</View>
        <AtInput
          title='输入内容'
          value={inputValue}
          onChange={this.handleInputValueChange.bind(this)}
        />
        <View>下方这个 atfab 如果不显示 home 图标则不正常</View>
        <AtFab>
          <View className='at-fab__icon at-icon at-icon-home'></View>
        </AtFab>
        <View>下方的 AtTabs 组件，A内容的高度超出了一屏，B内容的高度不足一屏</View>
        <View>期望正常显示</View>
        <View>目前的问题是小程序中A、B的内容都显示在A中，B是空白且高度和A的高度相同</View>
        <View>之前（1.3.0-beta.3）A的内容是正常的，B中的内容不会显示在A里，但有时B不显示内容，高度也和A的高度相同</View>
        <AtTabs current={tab.currentTab} tabList={tab.list} onClick={this.handleClickTab.bind(this)} swipeable>
          <AtTabsPane current={tab.currentTab} index={0}>
            <View><RichText nodes={tab.content[0]} /></View>
          </AtTabsPane>
          <AtTabsPane current={tab.currentTab} index={1}>
            <View><RichText nodes={tab.content[1]} /></View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
