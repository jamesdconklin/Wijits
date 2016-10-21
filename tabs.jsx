import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      tabs: props.tabs
    };
    this.render = this.render.bind(this);
  }

  render() {

    return (
      <div className="tabs-widget">
      <header className="tab-header">
        <ul className="tab-list">{this.state.tabs.map((tab, index) => (
            <li key={index} className={this.state.currentTab ===
                index ? "selected": ""} onClick=
                {this.tabClick.bind(this,index)}><h1>{tab.title}</h1></li>
        ))}
        </ul>
        </header>
        <div className="tab-content">
          {this.state.tabs[this.state.currentTab].content}
        </div>

    </div>
    );
  }
  tabClick(currentTab){
    this.setState({currentTab});
    console.log(currentTab);
  }

}

export default Tabs;
