// import { RouterPath } from 'config/RouterPath';
import { BrowserRouter, NavLink, PathRouteProps, Route, Routes } from 'react-router';
import { CSSProperties, lazy, ReactNode, Suspense, useCallback, useState } from 'react';
import { DEFAULT_TITLE } from '@/hooks/useDocumentTitle';
import classes from './MasterDetail.module.css';
import { ExpandToggle } from './ExpandToggle';
import { useToggle } from '@/hooks/useToggle';
import { RouterPath } from '@/config/RouterPath';
import { MasterDetailContext } from './MasterDetailContext';
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import NotFound from './NotFound';
import About from '@/about/About';
import { DynamicRoutes } from '@/9-Routing/DynamicRoutes/DynamicRoutes';
import { BreedsList } from '@/9-Routing/DynamicRoutes/BreedsList';
import { Breed } from '@/9-Routing/DynamicRoutes/Breed';

const Background = lazy(() => import('./Background'));

const COLLAPSED_WIDTH = '44px';
//({}) - to return an Object
const buildMasterStyle = (expanded: boolean): CSSProperties => ({
    minWidth: expanded ? '250px' : COLLAPSED_WIDTH,
    maxWidth: expanded ? '350px' : COLLAPSED_WIDTH,
    width: expanded ? '25%' : COLLAPSED_WIDTH,
});

export function MasterDetail({ children }: { children: ReactNode }) {
    const [routes, setRoutes] = useState<PathRouteProps[]>([]);
    const [expanded, toggleExpanded] = useToggle(true);

    //add a unique route
    const addRoute = useCallback((route: PathRouteProps) => {
        setRoutes((array) => {
            if (array.some((item) => item.path === route.path)) {
                return array;
            }
            return [...array, route];
        });
    }, []);

    return (
        <BrowserRouter>
            <div className={classes.container}>
                <nav className={classes.master} style={buildMasterStyle(expanded)}>
                    <div className={classes.masterTitle}>
                        <ExpandToggle expanded={expanded} onClick={toggleExpanded} />
                        {expanded && (
                            <NavLink to={RouterPath.ROOT} className={classes.titleLink}>
                                <h2>{DEFAULT_TITLE}</h2>
                            </NavLink>
                        )}
                    </div>
                    {expanded && (
                        <div className={classes.tableOfContents}>
                            <MasterDetailContext.Provider value={{ addRoute }}>
                                {children}
                            </MasterDetailContext.Provider>
                        </div>
                    )}
                </nav>
                <main className={classes.detail}>
                    <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                            <Route path={RouterPath.ROOT} element={<Background />} />
                            <Route path={RouterPath.ABOUT} element={<About />} />
                            <Route path={RouterPath.PAGE_NOT_FOUND} element={<NotFound />} />

                            <Route path={RouterPath.DYNAMIC_ROUTES} element={<DynamicRoutes />}>
                                <Route path="breeds" element={<BreedsList />}>
                                    <Route path=":breedId" element={<Breed />} />
                                </Route>
                            </Route>

                            {routes.map((props) => (
                                <Route key={props.path} {...props} />
                            ))}
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </BrowserRouter>
    );
}
