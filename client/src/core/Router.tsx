import Page404 from '@/components/Page404';
import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
  useMemo,
} from 'react';

interface IRouter {
  children: React.ReactElement | React.ReactElement[];
  initialPath?: string;
}

interface ISwitch {
  children: React.ReactElement | React.ReactElement[];
  currentPath: string;
}

interface IRoute {
  component: React.FunctionComponent;
  path: string;
  props?: Record<string, unknown>;
}

interface Route {
  props: IRoute;
}

interface IRouterContext {
  currentPath: string;
  historyPush: (pathname: string, data?: Record<string, unknown>) => void;
}

interface IRouteContext {
  params: Record<string, unknown>;
  component: React.FunctionComponent | null;
}

interface ILink {
  children?: React.ReactElement | string;
  to: string;
}

interface INavLink extends ILink {
  activeClassName: string;
}

interface IMatches {
  route: React.FunctionComponent;
  params: Record<string, unknown>;
}

const RouterContext = React.createContext<IRouterContext>({
  currentPath: '',
  historyPush: () => {},
});

const RouteContext = React.createContext<IRouteContext>({
  params: {},
  component: null,
});

export const Router = ({ children, initialPath }: IRouter) => {
  const [currentPath, setCurrentPath] = useState(
    initialPath || window.location.pathname
  );

  const historyPush = useCallback((pathname: string, data = {}) => {
    window.history.pushState(data, pathname, window.location.origin + pathname);
    setCurrentPath(pathname);
  }, []);

  const handlePathChange = useCallback(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, [historyPush]);

  const value = useMemo(() => {
    return { currentPath, historyPush };
  }, [currentPath, setCurrentPath]);

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};

export const Switch = ({ children }: IRouter) => {
  const { currentPath } = useHistory();
  const match = useMemo(
    () => matchRoutes({ children, currentPath }),
    [children, currentPath]
  );

  if (!match) return <Page404 />;

  const value = useMemo(() => {
    return { params: match.params, component: match.route };
  }, [match]);

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

export const Route = ({ path, component, props }: IRoute) => {
  const { currentPath } = useHistory();
  const params = useParams();

  // TODO: 현재 경로가 /loginxxx 일때
  // 라우터에 /login 경로가 있다면
  // 정상적으로 컴포넌트를 렌더링
  // 만약 두 경로가 아예 일치하지 않는 경우에
  // 404 페이지를 리턴해야 할 지 고민중

  if (currentPath === path || component === params.component) {
    return React.createElement(component, props);
  } else {
    return null;
  }
};

export const useHistory = (): IRouterContext => {
  return useContext<IRouterContext>(RouterContext);
};

export const useParams = () => {
  return useContext<IRouteContext>(RouteContext);
};

export const Link = ({ to, children }: ILink) => {
  const { historyPush } = useHistory();

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    historyPush(to);
  };
  return (
    <a href={to} onClick={onClick}>
      {children}
    </a>
  );
};

export const NavLink = ({ to, children, activeClassName }: INavLink) => {
  const { currentPath, historyPush } = useHistory();

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    historyPush(to);
  };
  return (
    <a
      href={to}
      onClick={onClick}
      className={currentPath === to ? activeClassName : ''}
    >
      {children}
    </a>
  );
};

const extractPath = (path: string) => {
  const keys: string[] = [];
  path = path.replace(/:(\w+)/g, (_, key: string) => {
    if (key) keys.push(key);
    return '([^\\/]+)';
  });

  const regex = new RegExp(`^(${path})`, 'i');
  return { regex, keys };
};

const matchRoutes = ({ children, currentPath }: ISwitch) => {
  const matches: IMatches[] = [];

  React.Children.forEach(children, (route: Route) => {
    const { regex, keys } = extractPath(route.props.path);
    const match = currentPath.match(regex);

    if (match) {
      const params = match.slice(2);
      matches.push({
        route: route.props.component,
        params: keys.reduce(
          (collection: Record<string, unknown>, param, index) => {
            collection[param] = params[index];
            return collection;
          },
          {}
        ),
      });
    }
  });

  return matches[0];
};
