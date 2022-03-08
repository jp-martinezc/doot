import React from "react";
import "./button.css"

class Switch extends React.Component {
  getClasses = () => {
     let className = "switch";
     if(this.props.status) className += " close";
     if(this.props.loading) className += " loading";
     return className;
  };
  render() {
    return (
    <button className={this.getClasses()} onClick={this.props.onChange}>
        { this.props.close ? '关' : '开' }
        {
          this.props.loading ?
            <span className="switch__btn switch__btn_loading">x</span>
          :
            <span className="switch__btn"></span>
        }
      </button>
    );
  }
}
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchStatus: true,
      switchLoading: false,
    };
  }
  
  handleSwitch = () => {
    const status = this.state.switchStatus;
    this.setState({
      switchLoading: true,
    });
    // 模拟异步加载     
    window.setTimeout(() => {
      this.setState({
        switchStatus: !status,
        switchLoading: false,
      });
    }, 1000);
  };

  render() {
    return (
      <section>
        <h3>开关按钮</h3>
        <Switch
          status={this.state.switchStatus}
          loading={this.state.switchLoading}
          onChange={this.handleSwitch}
        />
      </section>
    ); 
  }
}
/*
 * Render the above component into the div#app
 */

export default Application;