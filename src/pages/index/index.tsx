import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtToast } from "taro-ui"
import './index.scss'

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <AtToast text='toast' isOpened={false}></AtToast>
      </View>
    )
  }
}
