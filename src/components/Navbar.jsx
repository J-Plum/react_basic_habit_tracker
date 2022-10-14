import React, {  PureComponent } from 'react';

class Navbar extends PureComponent {
   render() {
      console.log('nav');
      return (
         <nav className='navbar'>
            <i className='navbar-logo fas fa-leaf'></i>
            <span>Habit Teacker</span>
            <span className='navbar-count'>{this.props.totalCount}</span>
         </nav>
      );
   }
}
export default Navbar