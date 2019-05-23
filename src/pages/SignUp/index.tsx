// react libraries
import * as React from 'React';

// components

// interfaces
import {
  SignUpState
} from './interfaces';

// helpers

class SignUp extends React.Component<SignUpState> {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  }

  render() {
    return (
      <div className="auth">
        <section className="signup">
          <div className="container">
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6 relative">
                <div className="Opynion-auth">
                  <a className="title is-2 has-text-centered" href="index.html">Opynion</a>
                  <p className="welcome-intro">Welcome to Opynion. Create your account to begin.</p>
                  <div className="social-login">
                    <a href="#" className="google"><img className="social-icon" src="./assets/images/logo-google.svg" alt="google logo" />
                    </a>
                  </div>
                  <form>
                    <div className="field is-horizontal">
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input className="input is-medium" type="text" placeholder="First Name" />
                          </div>
                        </div>
                      </div>
                      <div className="field-body ml-10">
                        <div className="field">
                          <div className="control">
                            <input className="input is-medium" type="text" placeholder="Last Name" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input is-medium" type="text" placeholder="username" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input is-medium" type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="field is-horizontal">
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input className="input is-medium" type="password" placeholder="password" />
                          </div>
                        </div>
                      </div>
                      <div className="field-body ml-10">
                        <div className="field">
                          <div className="control">
                            <input className="input is-medium" type="confirm passowrd" placeholder="confirm password" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="auth-btn ripple">
                      Create Account &#10145;
                    </button>
                  </form>
                </div>
              </div>
              <div className="column is-3"></div>
            </div>
          </div>   
        </section>
      </div>
    )
  }
}

export default SignUp;
