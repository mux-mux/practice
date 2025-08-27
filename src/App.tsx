import { MasterDetail } from 'components/MasterDetail/MasterDetail';
import classes from 'App.module.css';
import { StyledLink } from 'components/StyledLink/StyledLink';
import { RouterPath } from 'config/RouterPath';

function App() {
    return (
        <MasterDetail>
            <div className={classes.linksSection}>
                <StyledLink to={RouterPath.ABOUT}>📚 About this course</StyledLink>
            </div>
        </MasterDetail>
    );
}

export default App;
