import React from "react";
import "./button.css"
import { LOCALES } from '../../i18nProvider';



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
        
        <div>{this.props.language === LOCALES.ENGLISH ? "EN": "ES" }</div>
        {console.log(this.props.language)}
        
        {
          this.props.loading ?
            <span className="switch__btn switch__btn_loading">x</span>
          :
            <span className="switch__btn">a</span>
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
    this.props.setLanguage(this.props.language === LOCALES.ENGLISH ? LOCALES.SPANISH : LOCALES.ENGLISH);
    // 模拟异步加载     
    window.setTimeout(() => {
      this.setState({
        switchStatus: !status,
        switchLoading: false,
      });
    }, 500);
  };

  render() {
    return (
      <section>
        
        <Switch
          status={this.state.switchStatus}
          loading={this.state.switchLoading}
          onChange={this.handleSwitch}
          language={this.props.language}
        />
      </section>
    ); 
  }
}
/*
 * Render the above component into the div#app
 */

export default Application;