import React from "react";


export class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className = "header">Login</div>
                <div className = "content">
                    <div className="form">
                        <div className = "form-group">
                            <label htmlFor="username">Username</label>
                            <input type = "text" name = "username" placeholder = "Username..."/>
                            <label htmlFor="password">Password</label>
                            <input type = "password" name = "password" placeholder = "Password..."/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn-primary" onClick={this.props.action}>
                        Login
                    </button>
                </div>
            </div>
        )}
}