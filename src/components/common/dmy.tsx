import Taro, { Component } from '@tarojs/taro'
import {RichText, View} from '@tarojs/components'
import he from 'he'
import './dmy.scss'

export default class Dmy extends Component {

  constructor (props) {
    super(props)
    this.state = { content: '' }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps')
    const content = nextProps.content
    this.setState({content})
  }

  render () {
    return (
      <View className='dmy'>
        {this.state.content}
      </View>
    )
  }
}

Dmy.defaultProps = {
  content: ''
}
