/*
    Zustand notes - zustand replaces redux due to being much simpler for us without slices
       we will still learn react-query to handle data fetch from our api, which could in theory replace zustand
        but we will use both for now

        we create a store.js file -> I have made a createstore live template

        -> we MUST use the spread operator with nested objects or something like immer
            import {create} from 'zustand'
            import {createJSONStorage, persist} from "zustand/middleware";

          export const useStore = create(devtools((set) => ({
                person: {age: 30, name: 'Michel', favNums: [4, 5]},
                addAge: () => set((state) => ({
                    person: {
                        ...state.person,
                        age: state.person.age + 1,
                        favNums: [...state.person.favNums]
                    }
                }), false, 'add age'),

            })))


         note zustand has merging behavior, so when we reset the counter, we don't need to do spread operator {...state, counter: 0} -> we can just do {counter: 0}
            doing the above, zustand merges previous state, so we keep name: 'bob' and only change counter to 0
            -> in react state, we would have to spread ...prevState, to keep all other state properties,

        -> when we make persist, we should wrap it in devtools first, so we can see the state changes in redux devtools
             the 'false' after the state setter, 'resetCounter' means, do not batch state changes
                 when this was true, the toggle color mode would batch changes, and it did not change
                 when we set it to false, it worked as expected

            ->the string after true/false is a debugger name, so we can see what state setter is being called in redux devtools

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




       -> we see, if we set the state we don't need to do {...state, counter: 0} -> we can just do {counter: 0}
       -> we must remember in regular state the default way so we don't mutate state, like zustand lets us.

   inside the actual component:
        Never access the entire store, it will re-render when state in the same store in another component changes
            const { counter, username } = sessionStore((state) => state); XXXXXX

       -> we make sure to import store from store.js and not zustand. I made a livetemplate for usestore as well
         -> if this is a big store, we will re-render a lot, so we should select the state we need from the store this way
         -> we use the destructure method here, but we can use the single way, but the single way does NOT let us access multiple states
             const { counter } = sessionStore((state) => ({ counter: state.counter }));

      *** The best solution is to access each state we will use, so like above, only access the state we need, not the entire store
            const { counter, username } = sessionStore((state) => ({
              counter: state.counter,
              username: state.username,
            }));
            -> can be written separately as:
                const counter = sessionStore((state) => state.counter);
                const username = sessionStore((state) => state.username);


            <button className={"test-btn"} onClick={toggleColorMode}>toggle color mode
            </button>
            <p>{`current state: ${colorMode}`}</p>















*/
