import React, { Component } from 'react';

// 

class CreatePost extends Component {
  state = {
    title: '',
    body: '',
    show: false
  }
  showModal = e => {
    this.setState({ show: true });
  }
  onClose = e => {
    this.setState({ show: false });
  }
  renderHeader = () => {
    return (
      <div>Create Post</div>
    )
  }
  renderContent = () => {
    return (
      <div>body</div>
    )
  }
  renderFooter = () => {
    return (
      <div>footer</div>
    )
  }
  render() {
    return (
      <Modal
        renderHeader={renderHeader}
        renderContent={renderContent}
        renderFooter={renderFooter}
      />
    )
  }
}

export default CreatePost;

