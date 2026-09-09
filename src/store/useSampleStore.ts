import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {mmkvStorage} from './storage';

type SampleStoreType = {
  count: number;
  actions: {
    decrease: () => void;
    increase: () => void;
  };
};

export const useSampleStore = create<SampleStoreType>()(
  persist(
    set => ({
      count: 0,
      actions: {
        decrease: () => set(state => ({count: state.count - 1})),
        increase: () => set(state => ({count: state.count + 1})),
      },
    }),
    {
      name: 'sample-store',
      storage: createJSONStorage(() => mmkvStorage),
      partialize: state => ({count: state.count}),
    },
  ),
);
