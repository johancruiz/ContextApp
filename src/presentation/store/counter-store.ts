import { create } from 'zustand';


export interface Counter {
    count: number;
    incrementby: ( value: number ) => void;
}

const useCounterStore = create<Counter>()((set, get) => ({
    count: 1,
    incrementby: (value: number) => {
        set((state) => ({ count: state.count + value }))
    },
}));

export default useCounterStore; 