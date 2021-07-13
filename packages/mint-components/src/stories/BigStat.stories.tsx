import { h } from '@stencil/core';
import { BigStatView } from '../components/sqm-big-stat/sqm-big-stat-view';

export default {
  title: 'Big Stat',
};

export const Default = () => {
  const props = { statvalue: '9.900,00' };
  return <BigStatView {...props}>Big stat</BigStatView>;
};
