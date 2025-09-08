import { useFetch } from '@/hooks/useFetch';

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export function Pagination() {
    const { data } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
    return (
        <div>
            <h1 className="text-3xl">Pagination App</h1>
        </div>
    );
}
