import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Details from "./views/Details";
import Compose from "./views/Compose";
import Admin from "./views/Admin";
import HomeCard from './components/HomeCard'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Route exact path="/blogs/:id" component={Details} />
        <Route exact path="/views/compose" component={Compose} />
        <Route exact path="/views/admin/:id" component={Admin} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

// // all boilerplate template below - Class components (do not use)

// class App extends React.Component<IAppProps, IAppState> {
//   constructor(props: IAppProps) {
//     super(props);
//     this.state = {
//       blogs: []
//     };
//   }

//   async componentDidMount() {
//     try {
//       let r = await fetch("/api/blogs");
//       let blogs = await r.json();
//       this.setState({ blogs });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   render() {
//     return (
//       <main className="container my-5">
//         <h1 className="text-primary text-center">My Blog</h1>
//         <ul className="list-group">
//           {this.state.blogs.map(blog => {
//             return <li className="list-group-item">{blog.title}</li>;
//           })}
//         </ul>
//       </main>
//     );
//   }
// }


export interface IAppState {
  name: string;
}

export default App;
