import { Chapter, Section } from 'components/MasterDetail';
import { ReactTraits } from './ReactTraits/ReactTraits';
import { RouterPath } from 'config/RouterPath';

export function IntroSection() {
    return (
        <Section title="Intro">
            <Chapter
                emoji="⚛️"
                title="React traits"
                path={RouterPath.REACT_TRAITS}
                element={<ReactTraits />}
            />
        </Section>
    );
}
