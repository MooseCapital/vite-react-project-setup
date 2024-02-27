import {create} from 'zustand'
import {createJSONStorage, persist, devtools} from "zustand/middleware";

export const normalStore = create(devtools((set) => ({

    counter: 0,

    resetNormalState: () => set((state) => ({
        ...state,
        counter: 0
    }), false, 'resetNormalState'),

    incrementCounter: () => set((state) => ({
        ...state,
        counter: state.counter + 1
    }), false, 'increment counter'),



    person: {age: 30, name: 'Michel', favNums: [4, 5]},
    //update nested data in zustand with destructuring, notes below
    addAge_andNum: () => set((state) => ({
        person: {
            ...state.person,
            age: state.person.age + 1,
            favNums: [...state.person.favNums]
        }
    }), false, 'add age'),

    testComp: {
        fetchData: null,
        loading: true,
        fetchRan: false,
    },

    setFetchData: (data) => set((state) => ({
        testComp: {
            ...state.testComp,
            fetchData: data,
            fetchRan: true,
        }
    }), false, 'set fetch data'),
    resetFetchData: () => set((state) => ({
        testComp: {
            ...state.testComp,
            fetchRan: false,
            fetchData: null,
        }
    }), false, 'reset fetch data'),
})))

export const sessionStore = create(devtools(persist((set, get) => ({
        name: 'session-storage-test',
    }),
    {
        name: 'app-session-storage',
        storage: createJSONStorage(() => sessionStorage),
    },
)))

export const localStore = create(devtools(persist((set, get) => ({
        colorMode: 'light',
        toggleColorMode: () => set(state => ({
            colorMode: state.colorMode === 'light' ? 'dark' : 'light'
        }), false, 'toggle color mode'),
    }),
    {
        name: 'app-local-storage',
        storage: createJSONStorage(() => localStorage),
    },
)))
