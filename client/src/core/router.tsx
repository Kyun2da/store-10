import React, { useState, useContext } from 'react';

interface IRouter {
  children?: React.ReactElement;
  initialPath?: string;
}

interface IRoute {
  component: React.FunctionComponent;
  path: string;
  props?: Record<string, unknown>;
}

interface IRouterContext {
  currentPath: string;
  historyPush: (pathname: string, data?: Record<string, unknown>) => void;
}

interface ILink {
  children?: React.ReactElement | string;
  to: string;
}

const RouterContext = React.createContext<IRouterContext>({
  currentPath: '',
  historyPush: () => {},
});

export const Router = ({ children, initialPath }: IRouter) => {
  const [currentPath, setCurrentPAth] = useState(
    initialPath || window.location.pathname
  );

  const historyPush = (pathname: string, data = {}) => {
    window.history.pushState(data, pathname, window.location.origin + pathname);
    setCurrentPAth(pathname);
  };

  return (
    <RouterContext.Provider value={{ currentPath, historyPush }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Route = (props: IRoute) => {
  const { currentPath } = useHistory();

  //match()
  if (currentPath === props.path) {
    return React.createElement(props.component, props.props);
  } else {
    return null;
  }
};

export const useHistory = (): IRouterContext => {
  return useContext<IRouterContext>(RouterContext);
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
