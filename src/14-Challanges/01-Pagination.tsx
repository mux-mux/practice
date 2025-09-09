import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useFetch } from '@/hooks/useFetch';
import { useState } from 'react';
import { Error } from './Error';

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

const TOTAL = 100;
const PER_PAGE = 10;

export function Pagination() {
    const [page, setPage] = useState(1);
    const { data, error, loading } = useFetch<Post[]>(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&limit=${PER_PAGE}`,
    );
    const totalPages = Math.ceil(TOTAL / PER_PAGE);

    const handlePrevPage = () => {
        if (page > 1) setPage((currPage) => currPage - 1);
    };
    const handleNextPage = () => {
        if (page < totalPages) setPage((currPage) => currPage + 1);
    };
    const goToPage = (pageNum: number) => {
        setPage(pageNum);
    };
    const arrayFrom = (length: number) => {
        return [...Array(length).keys()];
    };

    if (error) {
        return <Error title="posts" error={error} />;
    }

    return (
        <div className="min-h-full">
            <div className="mx-auto max-w-3xl px-2 border border-gray-200 rounded-xl p-6">
                <h1 className="text-3xl text-center font-semibold py-6">Posts Pagination</h1>
                <div className="flex flex-col space-y-4 mb-6">
                    {loading
                        ? arrayFrom(PER_PAGE).map((index) => (
                              <Skeleton key={index} className="h-10 w-full" />
                          ))
                        : data?.map(({ id, title, body }) => (
                              <div key={id} className="p-4 border border-gray-200 rounded">
                                  <h2 className="text-xl font-semibold">{title}</h2>
                                  <p className="pt-4">{body}</p>
                              </div>
                          ))}
                </div>
                <div className="flex justify-between items-center">
                    <div>{`Page ${page} of ${totalPages}`}</div>
                    <div className="flex gap-2">
                        <Button
                            onClick={handlePrevPage}
                            disabled={loading || page < 1}
                            variant="outline"
                        >
                            Previuos
                        </Button>
                        <div className="flex gap-1">
                            {arrayFrom(totalPages).map((index) => (
                                <Button
                                    onClick={() => goToPage(index)}
                                    variant={page === index ? 'default' : 'outline'}
                                >
                                    {index}
                                </Button>
                            ))}
                        </div>
                        <Button
                            onClick={handleNextPage}
                            disabled={loading || page === totalPages}
                            variant="outline"
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
