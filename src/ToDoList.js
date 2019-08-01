import React, { Component, Fragment } from 'react' // Fragment 占位符标签
import ToDoItem from './ToDoItem'
import './style.css'


class ToDoList extends Component {
  // 每个类都要有 constructor 接受react的组件中的 props, super 继承
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['learning', 'read book'],
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handlDel = this.handlDel.bind(this)
  }

  render() {
    return (<Fragment>
      <div>
        <h1>plan something</h1>
        {/* 下面是一个input框 */}
        <label htmlFor="insert">请输入内容</label>
        <input type="text"
          id='insert'
          className='input'
          value={this.state.inputValue}
          onChange={this.handleChangeInput} />
        <button onClick={this.handleClick}>提交</button>
      </div>
      <ul>
        {this.getToDoItem()}
      </ul>
    </Fragment>)
  }

  getToDoItem() {
    return this.state.list.map((item, index) => {
      return <ToDoItem
        key={index}
        num={item}
        index={index}
        deleteTitem={this.handlDel} />
    })
  }

  // setState 可以接受对象 也可以是箭头函数,并接受 prevState参数，等同于 this.setState
  handleChangeInput(e) {
    const value = e.target.value;
    this.setState(() => {
      return {
        inputValue: value
      }
    })
  }

  handleClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: '',
    }))
  }

  handlDel(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState(() => ({
      list: list
    }))
  }
}

export default ToDoList