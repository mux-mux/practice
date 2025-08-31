import { ReactNode, useEffect } from 'react';
import { RouterPath } from 'config/RouterPath';
import classes from './Chapter.module.css';
import { NavLink } from 'react-router';
import { useMasterDetailContext } from './MasterDetailContext';

type ChapterProps = {
    title: string;
    emoji?: string;
    path: RouterPath;
    element?: ReactNode;
};

export function Chapter({ title, emoji, path, element }: ChapterProps) {
    const { addRoute } = useMasterDetailContext();
    const to = path.endsWith('/*') ? path.slice(0, -2) : path;

    useEffect(() => {
        if (element) {
            addRoute({ path, element });
        }
    }, [addRoute, element, path]);

    return (
        <NavLink
            to={to}
            className={({ isActive }) => {
                return isActive ? classes.navLinkActive : classes.navLink;
            }}
        >
            <div className={classes.chapter}>
                <div className={classes.emoji}>{emoji}</div>
                {title}
            </div>
        </NavLink>
    );
}
