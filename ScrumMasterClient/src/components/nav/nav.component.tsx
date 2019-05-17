import React from 'react';
import { Link } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { User } from '../../model/user';

// This is the state the Nav Bar
interface INavBarState {
  expanded: boolean
}

export class NavComponent extends React.Component<any, INavBarState> {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }
  render() {
    return (
      <SideNav
        expanded={this.state.expanded}
        onToggle={(expanded) => {
          this.setState({ expanded });
        }}
        id="sideNav" >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">

          <NavItem eventKey="home">
            <NavIcon className="sidenav-icon">
            <Link to="/home" ><img alt="Home" 
            src="https://img.icons8.com/nolan/45/000000/home.png"></img></Link>
            </NavIcon>
            <NavText>
              <Link to="/home" > <h5 className="nav_text titles">Home</h5> </Link>
            </NavText>
          </NavItem>

          <NavItem eventKey="userPage">
            <NavIcon>
            <Link to="/user-page"><img alt="User Page" 
            src="https://img.icons8.com/nolan/45/000000/contacts.png"></img></Link>
            </NavIcon>
            <NavText>
              <Link to="/user-page"><h5 className="nav_text titles">My Page</h5></Link>
            </NavText>
          </NavItem>

          <NavItem eventKey="questionMaster">
            <NavIcon>
            <Link to="/questionMaster"> <img alt="Question Master" 
            src="https://img.icons8.com/nolan/45/000000/ask-question.png"></img></Link>
            </NavIcon>
            <NavText>
              <Link to="/questionMaster"><h5 className="nav_text titles">Question Master</h5></Link>
            </NavText>
          </NavItem>

          <NavItem eventKey="codingMaster">
            <NavIcon>
            <Link to="/codeMaster"><img alt="Coding Master" src="https://img.icons8.com/nolan/45/000000/e-learning.png"></img></Link>
            </NavIcon>
            <NavText>
              <Link to="/codeMaster"><h5 className="nav_text titles">Code Master</h5></Link>
            </NavText>
          </NavItem>

        </SideNav.Nav>
      </SideNav >
    );
  }
}

