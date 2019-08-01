import React, {
  Component
} from 'react';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { num } = this.props
    return (
      <div onClick={this.handleClick}>{num}</div>
    )
  }
  handleClick() {
    const { deleteTitem, index } = this.props;
    deleteTitem(index);
  }

}

export default ToDoItem;