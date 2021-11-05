import logo from './images/logo.svg';
import menu from './images/bars.svg';
import times from './images/times.svg';
import testimg from './images/test-image.jpg';


function App() {
  return (
    <div className="App">
      <section className="site-content">
      <header className="header">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="menu-icon">
              <span className="bars">
                <img src={menu} alt="bars" />
              </span>
              <span className="times">
                <img src={times} alt="times" />
              </span>
            </div>
          </header>
        <div className="site-content__left">
          

          <div className="site-content__left--content">
            <h1>Lorem ipsum</h1>
            <h2>test</h2>
            <p>sadasd</p>
          </div>

        </div>
        <div className="site-content__right">
          <div className="main-image">
            <img src={testimg} alt="test" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
