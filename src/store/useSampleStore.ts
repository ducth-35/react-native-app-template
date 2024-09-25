import {create} from 'zustand';
import {_endpoints} from '../apis';

type SampleStoreType = {
  count: number;
  actions: {
    decrease: () => void | Function;
    increase: () => void | Function;
  };
};

export const useSampleStore = create<SampleStoreType>(set => ({
  count: 0,
  actions: {
    decrease: () => set(state => ({count: state.count - 1})),
    increase: () => set(state => ({count: state.count + 1})),
  },
}));
