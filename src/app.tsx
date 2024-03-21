import { Text, View } from '@tarojs/components'
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: 'red',
            width: 500,
            height: 500,
          }}
        >
          <Text>测试一下</Text>
        </View>
        {this.props.children}
      </>
    )
  }
}

export default App
