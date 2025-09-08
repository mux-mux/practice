import { MasterDetail } from '@/components/MasterDetail';
import classes from '@/App.module.css';
import { StyledLink } from '@/components/StyledLink/StyledLink';
import { RouterPath } from '@/config/RouterPath';
import { RoutingSection } from '@/9-Routing/RoutingSection';
import { OutsideLink } from '@/components/OutsideLink/OutsideLink';
import { IntroSection } from '@/0-Intro/IntroSection';
import { ChallengesSection } from './14-Challanges/ChallengesSection';

function App() {
    return (
        <MasterDetail>
            <IntroSection />
            <RoutingSection />
            <ChallengesSection />

            <div className={classes.linksSection}>
                <StyledLink to={RouterPath.ABOUT}>📚 About this course</StyledLink>
                <OutsideLink href="https://a-polishchuk.github.io/mastering-react/">
                    ⚛️ Production version
                </OutsideLink>
            </div>
        </MasterDetail>
    );
}

export default App;
