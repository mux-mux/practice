import { Chapter, Section } from '@/components/MasterDetail';
import { RouterPath } from '@/config/RouterPath';
import { Pagination } from './01-Pagination';

export function ChallengesSection() {
    return (
        <Section title="Challenges">
            <Chapter
                emoji="🔢"
                title="Pagination app"
                path={RouterPath.PAGINATION}
                element={<Pagination />}
            />
        </Section>
    );
}
