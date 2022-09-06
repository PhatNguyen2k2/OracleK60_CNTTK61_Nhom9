import config from './config';
import Home from '../pages/home';
import Statistics from '../pages/satistics';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.statistics, component: Statistics }
];

export { publicRoutes };
