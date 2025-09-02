import { ChapterWrapper } from 'components/ChapterWrapper/ChapterWrapper';
import { TypicalComponent } from './TypicalComponent';

export function ReactTraits() {
    return (
        <ChapterWrapper
            title="React traits"
            subtitle="How React is different from other libraries?"
        >
            <h4>This is how a typical React app looks like:</h4>

            <TypicalComponent name="App" isRoot>
                <TypicalComponent name="Header">
                    <TypicalComponent name="UserAvatar" />
                    <TypicalComponent name="Login">
                        <TypicalComponent name="Modal">
                            <TypicalComponent name="Form" />
                        </TypicalComponent>
                    </TypicalComponent>
                </TypicalComponent>
                <TypicalComponent name="Dashboard">
                    <TypicalComponent name="SomeChart">
                        <TypicalComponent name="ChartLegend" />
                    </TypicalComponent>
                </TypicalComponent>
            </TypicalComponent>
        </ChapterWrapper>
    );
}
