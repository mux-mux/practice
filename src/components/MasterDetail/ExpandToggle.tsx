import classes from './ExpandedToggle.module.css';

type Props = {
    expanded: boolean;
    onClick?: () => void;
};

export function ExpandToggle({ expanded, onClick }: Props) {
    return (
        <div className={classes.expandedToggle} onClick={onClick}>
            {expanded ? '➖' : '➕'}
        </div>
    );
}
