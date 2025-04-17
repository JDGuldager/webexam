import React, { Component } from 'react'
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheadings from "./AboutSubheadings";
import SubheadingsData from "./SubheadingsData";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png"
import careerIcon from "../assets/triple-corn.png"


export default class AboutMenu extends Component {
  constructor(props) {
    super(props);
    this.state= {
      activeMenuItem: 1,
      activeSubheadings: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
    activeMenuItem: menuItem,
    activeSubheadings: 1,
    });
  };

  handleSubheadingsClick = (subheading) => {
    this.setState({
    activeSubheadings: subheading,
    });
  };

  render() {
    const {activeMenuItem, activeSubheadings} = this.state;
    const menuItems = ["PERSONAL", "EDUCATION", "CAREER"];
    const activeMenuTitle = menuItems[activeMenuItem - 1];
    const activeMenuIcon = 
      activeMenuTitle === "PERSONAL" ? personalIcon: 
      activeMenuTitle === "EDUCATION" ? educationIcon: 
      careerIcon;

    const subheadings = SubheadingsData[activeMenuItem];

    return (
      <>
      <div className='menu'>
        {menuItems.map((item, index) =>(
          <AboutMenuItem
          key={index}
          title={item}
          active={activeMenuItem === index + 1}
          onClick={()=> this.handleMenuItemClick(index + 1)}
          />
        ))}
      </div>
      <div className='sub-container'>
        <div className='icon-tile-container'>
          <img src={activeMenuIcon} alt={activeMenuTitle} className='icon'/>
          <h3>{activeMenuTitle}</h3>
        </div>
      {subheadings.map((subheading, index) =>(
        <AboutSubheadings
        key={index}
        title={subheading.title}
        content={subheading.content}
        active={activeSubheadings === index + 1}
        onClick={()=> this.handleSubheadingClick(index + 1)}
        menuItem={activeMenuItem}
        />
      ))}
    </div>
    </>
    );
  }
}
