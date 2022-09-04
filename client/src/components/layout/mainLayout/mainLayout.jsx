import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '../components/header';
import Footer from '../components/footer';
import styles from './mainLayout.scss';

const cx = classNames.bind(styles);

function mainLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content', 'grid wide')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

mainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default mainLayout;