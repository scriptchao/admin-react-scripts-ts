/*
 * @Author: 托尼
 * @Date: 2020-04-18 01:37:51
 * @LastEditors: 托尼
 * @LastEditTime: 2020-07-22 16:15:48
 */ 

import 'core-js'
import '@babel/runtime/regenerator'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
