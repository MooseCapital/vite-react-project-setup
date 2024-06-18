import {create} from 'zustand'
import {createJSONStorage, persist, devtools} from "zustand/middleware";
import {immer} from 'zustand/middleware/immer'
export const normalStore = create(devtools(immer((set) => ({

    immerTestState: {
        nestedObj: {
            secondNestedArray: [1,2,3]
        }
    },
    //push to nested array without mutating the state, no immer!, remember immer doesn't need return parenthesis,
        //while setting state with the spread operator does
    pushToNestedArrayNoImmer: (data) => set((state) => ({
        immerTestState: {
                ...state.immerTestState,
                nestedObj: {
                    ...state.immerTestState.nestedObj,
                    secondNestedArray: [...state.immerTestState.nestedObj.secondNestedArray, data]
                }
            }
    }), false, 'push to nested array without immer'),
    //with immer, it auto spreads nested data for us, so we are not mutating state
    pushToNestedArrayUsingImmer: (data) => set((state) => {
        state.immerTestState.nestedObj.secondNestedArray.push(data);
    }, false, 'push to nested array with immer'),



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
}))));

export const sessionStore = create(devtools(immer(persist((set, get) => ({
        name: 'session-storage-test',
    }),
    {
        name: 'app-session-storage',
        storage: createJSONStorage(() => sessionStorage),
    },
))));

export const localStore = create(devtools(immer(persist((set, get) => ({
        colorMode: 'light',
        toggleColorMode: () => set(state => ({
            colorMode: state.colorMode === 'light' ? 'dark' : 'light'
        }), false, 'toggle color mode'),
    }),
    {
        name: 'app-local-storage',
        storage: createJSONStorage(() => localStorage),
    },
))));
