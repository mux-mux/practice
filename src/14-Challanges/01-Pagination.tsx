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
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="mx-auto max-w-3xl px-2 border border-gray-200 rounded-xl p-6">
                <h1 className="text-2xl md:text-3xl text-center font-semibold py-6">
                    Posts Pagination
                </h1>
                <div className="flex flex-col space-y-4 mb-6">
                    {loading
                        ? arrayFrom(PER_PAGE).map((index) => (
                              <div key={index} className="space-y-2">
                                  <Skeleton className="h-6 w-3/4" />
                                  <Skeleton className="h-4 w-full" />
                                  <Skeleton className="h-4 w-5/6" />
                              </div>
                          ))
                        : data?.map(({ id, title, body }) => (
                              <div key={id} className="p-4 border border-gray-200 rounded-lg">
                                  <h3 className="text-lg font-semibold">{title}</h3>
                                  <p className="mt-2">{body}</p>
                              </div>
                          ))}
                </div>
                <div className="flex flex-col flex-wrap justify-between items-center gap-4 sm:flex-row">
                    <div className="text-sm">{`Page ${page} of ${totalPages}`}</div>
                    <div className="flex items-center gap-2">
                        <Button
                            onClick={handlePrevPage}
                            disabled={loading || page === 1}
                            variant="outline"
                        >
                            Previuos
                        </Button>
                        <div className="flex items-center gap-1 sm:flex">
                            {arrayFrom(totalPages).map((index) => {
                                const pageNum = index + 1;
                                return (
                                    <Button
                                        onClick={() => goToPage(pageNum)}
                                        variant={page === pageNum ? 'default' : 'outline'}
                                        disabled={loading}
                                        className="h-10 w-10 p-0"
                                    >
                                        {pageNum}
                                    </Button>
                                );
                            })}
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
