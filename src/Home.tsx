// import {MouseEvent} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // const [name, setName] = useState('Miri')

    // const handleClick = (event: MouseEvent) => {
    //     console.log('Hello', event);
    // }
    //
    // const handleClickAgain = (name: string) => {
    //     setName(name);
    // }

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    // const [blogs, setBlogs] = useState<IBlog[]>([]);
    // const [isLoading, setIsLoading] = useState(true)
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogs')
    //             .then(res => {
    //                 if (!res.ok) {
    //                     throw Error('Could not fetch the data for that resource')
    //                 }
    //                 return res.json()
    //             })
    //             .then(data => {
    //                 setBlogs(data);
    //                 setIsLoading(false);
    //                 setError(null);
    //             })
    //             .catch(err => {
    //                 setError(err.message);
    //                 setIsLoading(false);
    //             })
    //     }, 1000)
    //
    // }, [])

    // const handleDelete = (id: number) => {
    //     // const newBlogs = (blogs || []).filter(blog => blog.id !== id);
    //     // setBlogs(newBlogs);
    // }


    // runs on every re-render
    // if we change the state here - it will trigger a re-render
    // thus we will get an infinite loop

    // useEffect(() => {
    //     console.log('use effect ran');
    // })

    // if we only want to run it on initial render -
    // we can pass empty dependencies array:
    // useEffect(() => {
    //     console.log('use effect ran');
    // }, [])

    // we can trigger it only on some state changes -
    // if we pass the dependencies:

    // const [name, setName] = useState('Miri')

    // useEffect(() => {
    //     console.log('use effect ran');
    // }, [name])

    return (
        <div className="home">
            {/*<p>{name}</p>*/}
            {/*<button onClick={handleClick}>Click me</button>*/}
            {/*<button onClick={() => handleClickAgain('Luigi')}>Click me 2</button>*/}
            {isLoading && <div>Loading..</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/*{blogs && <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs"*/}
            {/*                               handleDelete={handleDelete}/>}*/}
        </div>
    );
};

export default Home;
