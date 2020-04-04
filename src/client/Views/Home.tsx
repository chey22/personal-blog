import * as React from "react";
import { useState, useEffect } from "react";
import { IBlog } from "../utils/types";
import HomeCard from "../Components/HomeCard";

// const Home: React.FC<IAppProps> = () => {
// 	return (
// 		<h1>Home</h1>
// 	)
// }

const Home: React.FC<HomeProps> = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("/api/blogs"); //fetch that info and set it to state
      let blogs = await res.json();
      setBlogs(blogs); // prefills with that blogs's text input
    })(); // anonymous function that immediately invokes itself
  }, []);

  return (
    <React.Fragment>
      <div>
        <h1>Home</h1>
      </div>

	  <main className="container my-5">
	  <section className="row my-2 justify-content-center">
		{blogs.map(blog => {
			<HomeCard key={`blog-card-home-${blog.id}`} blog = {blog}/>;
		})}
	  </section>
	</main>
    </React.Fragment>
  );
};

// class Home extends React.Component<IAppProps, IAppState> {
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

export interface HomeProps {}

export default Home;
