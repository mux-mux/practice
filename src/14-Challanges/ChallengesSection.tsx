import { Chapter, Section } from '@/components/MasterDetail';
import { RouterPath } from '@/config/RouterPath';
import { Pagination } from './01-Pagination';
import { ToDo } from './02-ToDo';

export function ChallengesSection() {
    return (
        <Section title="Challenges">
            <Chapter
                emoji="🔢"
                title="Pagination app"
                path={RouterPath.PAGINATION}
                element={<Pagination />}
            />
            <Chapter emoji="✅" title="ToDo app" path={RouterPath.TODO} element={<ToDo />} />
        </Section>
    );
}
