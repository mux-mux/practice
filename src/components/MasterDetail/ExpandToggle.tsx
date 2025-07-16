import { DEFAULT_TITLE } from 'hooks/useDocumentTitle';
import classes from './ExpandedToggle.module.css';

type Props = {
    expanded: boolean;
    onClick?: () => void;
};

export function ExpandToggle({ expanded, onClick }: Props) {
    return (
        <button className={classes.expandedToggle} onClick={onClick}>
            {expanded ? '➖' : '➕'}
            {expanded && <h2>{DEFAULT_TITLE}</h2>}
        </button>
    );
}
