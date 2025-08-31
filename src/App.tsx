import { MasterDetail } from 'components/MasterDetail';
import classes from 'App.module.css';
import { StyledLink } from 'components/StyledLink/StyledLink';
import { RouterPath } from 'config/RouterPath';
import { RoutingSection } from '9-Routing/RoutingSection';

function App() {
    return (
        <MasterDetail>
            <RoutingSection />

            <div className={classes.linksSection}>
                <StyledLink to={RouterPath.ABOUT}>📚 About this course</StyledLink>
            </div>
        </MasterDetail>
    );
}

export default App;
