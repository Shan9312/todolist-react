import React, {
  Component
} from 'react';
import PropTypes from 'prop-types'  // 定义数据类型格式

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { num, text } = this.props
    return (
      <div onClick={this.handleClick}>{text}-{num}</div>
    )
  }
  handleClick() {
    const { deleteTitem, index } = this.props;
    deleteTitem(index);
  }

}
ToDoItem.propTypes = {
  text: PropTypes.string,
  num: PropTypes.string,
  deleteTitem: PropTypes.func,
  index: PropTypes.number
}
ToDoItem.defaultProps = {
  text: 'hello word'
}

export default ToDoItem;