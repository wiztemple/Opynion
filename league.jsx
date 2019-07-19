import React, { Component } from 'react';

class League extends Component {
  state = {
    isExpanded: false,
  }
  handleToggle = (e) => {
    e.preventDefault();
    this.setState({ isExpanded: !this.state.isExpanded, height: this.refs.inner.clientHeight })
  }
  render() {
    const { name, competition } = this.props;
    const { isExpanded, height } = this.state;
    const currentHeight = isExpanded ? height : 0;
    return (
      <div className="league">
        <label className="container">
          <div className={`panel ${isExpanded ? 'is-expanded' : ''}`} onClick={(e) => this.handleToggle(e)}>
            <span>{name}</span>
            <input type="radio" name="league" />
            <span className="checkmark" />
            <div className="panel-collapse">
              <div className="panel-body" ref="inner">
                {competition}
              </div>
            </div>
          </div>
        </label>
        <style jsx>
          {`

          .league {
            padding: 16px 0 10px 20px;
            border-bottom: 1px solid #304854;
          }
          .container {
            display: block;
            position: relative;
            padding: 4px 0 0 35px;
            margin-bottom: 12px;
            color: #ebeced;
            cursor: pointer;
            font-size: 16px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }

          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #eee;
            border-radius: 50%;
          }

          .container:hover input ~ .checkmark {
            background-color: #ccc;
          }

          .container input:checked ~ .checkmark {
            background-color: #999;
          }

          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }

          .container input:checked ~ .checkmark:after {
            display: block;
          }

          .container .checkmark:after {
            top: 9px;
            left: 9px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
          }
          .panel-collapse {
            height: ${currentHeight + 'px'};
            overflow: hidden;
            transition: height 0.3s ease;
          }
          .panel > .panel-body {
            display: none;
          }
          .panel > .is-expanded {
            display: block;
          }
        `}
        </style>
      </div>
    );
  }
}

export default League;

