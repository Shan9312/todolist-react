import React from 'react'; // jsx的语法需要使用react 编译
import ReactDOM from 'react-dom'; // 编译组件到dom 上显示元素
import ToDoList from './ToDoList' // 引入组件

ReactDOM.render( < ToDoList / > , document.getElementById('root'));