import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChapterWrapper } from '@/components/ChapterWrapper/ChapterWrapper';
import { StyledLink } from '@/components/StyledLink/StyledLink';
import { Outlet } from 'react-router';

const queryClient = new QueryClient();

export function DynamicRoutes() {
    return (
        <ChapterWrapper
            title="Dynamic routes"
            subtitle="Nested routes, dynamic segments & useParams()"
        >
            <StyledLink to="breeds">Breed List</StyledLink>
            <QueryClientProvider client={queryClient}>
                <Outlet />
            </QueryClientProvider>
        </ChapterWrapper>
    );
}
