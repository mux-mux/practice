import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import classes from './ColoredBlock.module.css';

export type ColoredBlockProps = {
    children: ReactNode;
    style: CSSProperties;
    onClick?: MouseEventHandler;
};

export function ColoredBlock({ children, style, onClick }: ColoredBlockProps) {
    return (
        <div className={classes.coloredBlock} style={style} onClick={onClick}>
            {children}
        </div>
    );
}
