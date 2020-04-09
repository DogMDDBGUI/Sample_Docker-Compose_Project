import React from 'react'

export class NavBar extends React.Component {
  menu = [
    'My Profile', 'Book Appointment','Log Out'
  ];

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-items" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a href="/" className="navbar-brand mr-0 mr-md-2">
          <img src={process.env.PUBLIC_URL + '/dog2.png'} width="30" height="30" class="d-inline-block align-top" alt=""/>
          DogMD.
        </a>
        <div className="collapse navbar-collapse" id="navbar-items">
          <ul className="navbar-nav">
            {
                <>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    {this.menu[0]}
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">
                  {this.menu[1]}
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/">
                {this.menu[2]}
              </a>
            </li>
            </>
            }
          </ul>          
        </div>
      </nav>
    );  
  }
}