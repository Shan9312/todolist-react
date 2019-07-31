import React, {
  Component
} from 'react';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div onClick={this.handleClick}>{this.props.num + '' + this.props.key}</div>
    )
  }
  handleClick(e) {
    console.log(this.props);
    this.props.deleteTitem(this.props.index);
  }

}

export default ToDoItem;