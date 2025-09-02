import { ReactNode } from 'react';
import classes from './TypicalComponent.module.css';

export type Props = {
    name: string;
    isRoot?: boolean;
    children?: ReactNode;
};

export function TypicalComponent({ name, isRoot = false, children }: Props) {
    return (
        <div>
            &lt;{name} /&gt;
            {!isRoot && <div className={classes.arrow}>⇩</div>}
            {children && <div className={classes.children}>{children}</div>}
        </div>
    );
}
