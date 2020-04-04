export interface IAppProps { }

export interface IAppState {
	blogs: Array<IBlog>;
	tags: Array<ITags>;
}

export interface IBlog {
    id: number
    title: string
    content: string
    name: string
    authorid: number
}

export interface ITags {
	id: number;
	name: string;
}

// interface IHomeCardProps {
//     blog: {
//         id: number,
//         title: string,
//         content: string,
//         authorid: number,
//         created_at: Date,
//         name: string,
//     };
//     tags: {
//         id: number,
//         name: string
//     }[];
//     authors: {
//         id: number,
//         name: string,
//         email: string,
//         created_at: Date,
//     };
// }