import Taro, { Component } from '@tarojs/taro'
import {View} from '@tarojs/components'
import './dmy.scss'

export default class Dmy extends Component {

  constructor (props) {
    super(props)
    this.state = { content: '' }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state)
    return {content: props.content};
  }

  componentWillMount () {
    console.log('componentWillMount')
    this.getDerivedStateFromProps()
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='dmy'>
        {this.state.content}
      </View>
    )
  }
}

Dmy.defaultProps = {
  content: 'C'
}
