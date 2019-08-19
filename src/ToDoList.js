import React, { Component, Fragment } from 'react' // Fragment 占位符标签
import ToDoItem from './ToDoItem'
// import axios from 'axios'
import './style.css'


class ToDoList extends Component {
  // 每个类都要有 constructor 接受react的组件中的 props, super 继承
  constructor(props) {
    super(props);
    // 当组件的 state和props 改变时，就会重新执行render 函数
    this.state = {
      inputValue: '',
      list: ['shanshan'],
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handlDel = this.handlDel.bind(this)
  }
  render() {
    // 渲染原理： JSX语法——》createElement ——》 虚拟dom（js对象） ——》真实的Dom
    // 优点：性能提升，之前是dom 对比，现在是js对象对比区别。性能大大提高
    return (<Fragment>
      <div>
        <h1>plan something</h1>
        <label htmlFor="insert">请输入内容</label>
        <input type="text"
          id='insert'
          className='input'
          value={this.state.inputValue}
          onChange={this.handleChangeInput} />
        <button onClick={this.handleClick}>提交</button>
      </div>
      <ul ref={(ul) => { this.ul = ul }}>
        {this.getToDoItem()}
      </ul>
    </Fragment>)
  }

  componentDidMount() {
    // axios.get('/api/todolist').then((res) => {
    //   console.log('发送请求')
    // })
    let data = ['daili', 'DAHua', 'Ceshi'];
    this.setState(() => {
      return {
        list: [...data]
      }
    })

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
    // setState是异步函数，连续多次执行时，setState会合并多个函数，并只回执行一次
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: '',
    }), () => {
      //ref, 为了保障能拿到dom节点，可以在setState后添加一个函数，保证dom渲染完成后执行
      console.log(this.ul.querySelectorAll('div').length)
    })
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