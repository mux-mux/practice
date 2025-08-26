import classes from './About.module.css';

const About = () => {
    return (
        <div className={classes.root}>
            <h2>What you will learn</h2>
            <ol>
                <li>
                    build web applications using React, TypeScript and other modern technologies
                </li>
                <li>
                    create applications with the right architecture that are easy to change and
                    maintain
                </li>
                <li> think "React-style" and understand how React works under the hood</li>
                <li>
                    manage state using "native" React hooks and libraries like Redux, Zustand,
                    Jotai, Rematch
                </li>
                <li> retrieve data from the server using React Query, SWR or direct requests</li>
                <li> create routing using React Router</li>
                <li> test your components using Vitest and the React Testing Library</li>
            </ol>

            <h2>Technology stack</h2>
            <ul>
                <li>
                    <h3>Fundamentals</h3>
                    <ul>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Vite</li>
                    </ul>
                </li>
                <li>
                    <h3>State management</h3>
                    <ul>
                        <li>Redux</li>
                        <li>Rematch</li>
                        <li>Zusstand</li>
                        <li>Jotai</li>
                    </ul>
                </li>
                <li>
                    <h3>Data fetching</h3>
                    <ul>
                        <li>React.Context + fetch API</li>
                        <li>TanStack Query / React Query</li>
                        <li>SWR</li>
                    </ul>
                </li>
                <li>
                    <h3>Routing</h3>
                    <ul>
                        <li>React Router</li>
                    </ul>
                </li>
                <li>
                    <h3>Testing</h3>
                    <ul>
                        <li>Vitest / Jest</li>
                        <li>React Testing Library</li>
                        <li>Storybook</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default About;
