import { useFetch } from '@/hooks/useFetch';

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export function Pagination() {
    const { data } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

    return (
        <div className="min-h-full">
            <div className="mx-auto max-w-3xl px-2 border border-gray-200 rounded-xl">
                <h1 className="text-3xl text-center font-semibold">Posts Pagination</h1>
                <div className="flex flex-col space-y-4">
                    {data?.map(({ id, title, body }) => (
                        <div key={id} className="border border-gray-200 rounded">
                            <h2 className="text-xl font-semibold">{title}</h2>
                            <p className="pt-4">{body}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between">
                    <div>`Page 1 of 10`</div>
                    <div>
                        <button>Previuos</button>
                        <div>...buttons</div>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
