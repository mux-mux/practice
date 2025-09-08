import { Chapter, Section } from '@/components/MasterDetail';
import { ReactTraits } from './ReactTraits/ReactTraits';
import { RouterPath } from '@/config/RouterPath';
import { HelloWorld } from './HelloWorld';
import { JsxBasics } from './JSX/JsxBasics';
import { ReactWithoutJsx } from './JSX/ReactWithoutJsx';
import { Fragments } from './JSX/Fragments';

export function IntroSection() {
    return (
        <Section title="Intro">
            <Chapter
                emoji="⚛️"
                title="React traits"
                path={RouterPath.REACT_TRAITS}
                element={<ReactTraits />}
            />
            <Chapter
                emoji="👽"
                title="Hello, world!"
                path={RouterPath.HELLO_WORLD}
                element={<HelloWorld />}
            />

            <Section title="JSX">
                <Chapter
                    emoji="📝"
                    title="JSX Basics"
                    path={RouterPath.JSX_BASICS}
                    element={<JsxBasics />}
                />
                <Chapter
                    emoji="🏗"
                    title="React.createElement()"
                    path={RouterPath.JSX_CREATE_ELEMENT}
                    element={<ReactWithoutJsx />}
                />
                <Chapter
                    emoji="📎"
                    title="Fragments"
                    path={RouterPath.JSX_FRAGMENTS}
                    element={<Fragments />}
                />
            </Section>
        </Section>
    );
}
