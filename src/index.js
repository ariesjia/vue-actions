import mutationCreator from './mutation-creator';
import { actionCreator , actionCreators, actionNameCreator } from './action-creator';
import mapPending, { install } from './map-pending';

const actionTypePrefixCreator = (...args) => {
	console.warn('vuex-actions: this methods is depleted')
  return actionNameCreator.call(this, ...args)
}

export default  {
	install
}

export {
	mutationCreator,
	actionCreator,
  actionCreators,
  actionNameCreator,
	actionTypePrefixCreator,
	mapPending
};


