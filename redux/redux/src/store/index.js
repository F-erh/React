import { createStore } from 'redux';
import reserve from './modules/reserve/reducer';

const store = createStore(reserve);

export default store;