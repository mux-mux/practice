// import { RouterPath } from 'config/RouterPath';
import { BrowserRouter } from 'react-router';
import { CSSProperties, ReactNode } from 'react';
import classes from './MasterDetail.module.css';
import { ExpandToggle } from './ExpandToggle';
import { useToggle } from 'hooks/useToggle';

const COLLAPSED_WIDTH = '44px';
//({}) - to return Object
const buildMasterStyle = (expanded: boolean): CSSProperties => ({
    minWidth: expanded ? '250px' : COLLAPSED_WIDTH,
    maxWidth: expanded ? '350px' : COLLAPSED_WIDTH,
    width: expanded ? '25%' : COLLAPSED_WIDTH,
});

export function MasterDetail({ children }: { children: ReactNode }) {
    const [expanded, toggleExpanded] = useToggle(true);

    return (
        <BrowserRouter>
            <div className={classes.container}>
                <nav className={classes.master} style={buildMasterStyle(expanded)}>
                    <div className={classes.masterTitle}>
                        <ExpandToggle expanded={expanded} onClick={toggleExpanded} />
                    </div>
                </nav>
                <main>{children}</main>
            </div>
        </BrowserRouter>
    );
}
