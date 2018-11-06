import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { DatePicker, Button } from 'antd';
import './app.css';
// import printMe from './print'

// 不使用React Router   一层还好，万一嵌套了好几层呢 是不是就麻烦了
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       route: window.location.hash.substr(1)
//     }
//   }

//   componentDidMount() {
//     window.addEventListener('hashchange', () => {
//       this.setState({
//         route: window.location.hash.substr(1)
//       })
//     })
//   }

//   render() {
//     let Child = null;
//     switch(this.state.route){
//       case '/about':
//         Child = <div>这是about子页面</div>;
//         break;
//       case '/inbox':
//         Child = <div>这是Inbox子页面</div>;
//         break;
//       default:
//         Child = <div>首页</div>;
//     }
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li><a href="#/about">About</a></li>
//           <li><a href="#/inbox">Inbox</a></li>
//         </ul>
//         {Child}
//       </div>
//     )
//   }
// }

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
          </ul>
          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/topics' component={Topics} />
        </div>
      </Router>
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/heiheihei`}>嘿嘿嘿</Link>
        </li>
        <li>
          <Link to={`${match.url}/hehehe`}>呵呵呵</Link>
        </li>
        <li>
          <Link to={`${match.url}/gegege`}>咯咯咯</Link>
        </li>
      </ul>
      <Route path={`${match.url}/:id`} component={Topic} />
    </div>
  </Router>
)

const Topic = ({ match }) => {
  return (<div>
    <h2>{match.params.id}</h2>
  </div>)
}

export default App;
