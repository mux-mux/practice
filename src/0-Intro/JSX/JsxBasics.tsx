import { ChapterWrapper } from 'components/ChapterWrapper/ChapterWrapper';

function JsxIs() {
    return (
        <div>
            ✅ JSX <span style={{ color: 'green', fontWeight: 'bold' }}>IS</span>:
            <ul>
                <li>JavaScript syntax extension</li>
                <li>Syntactic sugar for {<code>React.createElement()</code>}</li>
                <li>Expressive and easy-to-use</li>
            </ul>
        </div>
    );
}

function JsxIsNot() {
    return (
        <div>
            ❌ JSX <span style={{ color: 'red', fontWeight: 'bold' }}>IS NOT</span>:
            <ul style={{ listStyleType: 'circle' }}>
                <li>String</li>
                <li>HTML</li>
                <li>XML</li>
            </ul>
        </div>
    );
}

function FactsAboutJsx() {
    const any = 'any';
    return (
        <div>
            👽 Facts about JSX:
            <ol>
                <li>JSX is optional</li>
                <li>
                    Transpiled by{' '}
                    <a href="https://babeljs.io/" target="_blank" rel="noreferrer">
                        Babel
                    </a>{' '}
                    to {<code>React.createElement()</code>} calls
                </li>
                <li>
                    JSX is JS, so you can do with JSX everything you can do with regular JS values
                </li>
                <li>You can use {'any'} expressions inside the JSX</li>
                <li>You can use any expressions inside the JSX</li>
                <li>{`But note that '${any}' in previous example rendered in a separate text element`}</li>
                <li>2 + 2 = {2 + 2} (a fact, but not about JSX)</li>
            </ol>
        </div>
    );
}

export function JsxBasics() {
    const anchorElement = (
        <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noreferrer">
            JSX
        </a>
    );

    return (
        <ChapterWrapper
            title={<span>🤔 What is {anchorElement}?</span>}
            subtitle="Introduction to JSX"
        >
            <JsxIsNot />
            <JsxIs />
            <FactsAboutJsx />
        </ChapterWrapper>
    );
}
