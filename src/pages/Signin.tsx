import '../styles/pages/signin.scss'

export default function Signin() {

  function toggleSignin() {
    document.querySelector('.signin')?.classList.toggle('signup-show')
  }

  return (
    <div className="signin">
      <div className="signin-container">
        <h1>SIGN IN</h1>
        <a onClick={toggleSignin}><b>new user?</b> Create an account</a>

        <form>
          <input type="text" placeholder="username or email" />
          <input type="password" placeholder="password" />
          <div>
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign in</button>
          </div>
        </form>

        <hr className="hrText" data-content="OR"></hr>

        <div className="social-login">
          <img src="/images/icons/icon-facebook.svg" alt="" />
          <img src="/images/icons/icon-apple.svg" alt="" />
          <img src="/images/icons/icon-google.svg" alt="" />
        </div>
      </div>

      <aside>
        <img src="/images/DC_Comics_logo.svg" alt="" />
      </aside>

      <div className="register">
        <h1>SIGN UP</h1>
        <a onClick={toggleSignin}><b>is user?</b> Make login</a>

        <form>
          <input type="text" placeholder="email" />
          <input type="phone" placeholder="phone" />
          <input type="password" placeholder="password" />
          <div>
            <button type="submit">Sign in</button>
          </div>
        </form>

        <hr className="hrText" data-content="OR"></hr>

        <div className="social-login">
          <img src="/images/icons/icon-facebook.svg" alt="" />
          <img src="/images/icons/icon-apple.svg" alt="" />
          <img src="/images/icons/icon-google.svg" alt="" />
        </div>
      </div>
    </div>
  )
}