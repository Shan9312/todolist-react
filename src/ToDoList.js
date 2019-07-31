import React, { Component, Fragment } from 'react' // Fragment 占位符标签
import './style.css'
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
  // 每个类都要有 constructor 接受react的组件中的 props, super 继承
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['learning', 'read book'],
    }
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
          onChange={this.handleChangeInput.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>提交</button>
      </div>
      <ul>

        {this.state.list.map((item, index) => {
          return <div>
            <ToDoItem
              num={item}
              index={index}
              deleteTitem={this.handlDel.bind(this)}
            />
          </div>
          // <li key={index}
          //   onClick={this.handlDel.bind(this, index)}
          //   dangerouslySetInnerHTML={{ __html: item }}
          // ></li>
        })}
      </ul>
    </Fragment>)
  }
  handleChangeInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClick(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
  }
  handlDel(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}

export default ToDoList