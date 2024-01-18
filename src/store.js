import {create} from 'zustand'
import {createJSONStorage, persist, devtools} from "zustand/middleware";

export const useStore = create(devtools((set) => ({
    selectedImage: null,
    compressedImage: null,
    setSelectedImage: (img) => set((state) => ({
        ...state,
        selectedImage: img
    }), false, 'set selected image'),
    setCompressedImage: (img) => set((state) => ({
        ...state,
        compressedImage: img
    }), false, 'set compressed image'),
    imgLoading: false,
    setImgLoading: (bool) => set((state) => ({
        ...state,
        imgLoading: bool
    }), false, 'setImgLoading'),
    person: {age: 30, name: 'Michel', favNums: [4, 5]},
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
            loading: false,
            fetchRan: true,
        }
    }), false, 'set fetch data'),
    resetFetchData: () => set((state) => ({
        testComp: {
            ...state.testComp,
            loading: true,
            fetchRan: false,
            fetchData: null,
        }
    }), false, 'reset fetch data'),
})))

export const sessionStore = create(devtools(persist((set, get) => ({
        name: 'bob',
        counter: 0,
        resetCounter: () => set((state) => ({
            ...state,
            counter: 0
        }), false, 'reset counter'),
        incrementCounter: () => set((state) => ({
            ...state,
            counter: state.counter + 1
        }), false, 'increment counter'),

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
