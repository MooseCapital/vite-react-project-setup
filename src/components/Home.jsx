import {useState} from 'react'
import React from 'react'
import {normalStore} from "../store.js";
import {ActionIcon, useMantineColorScheme, useComputedColorScheme} from '@mantine/core';
import {IconSun, IconMoon} from '@tabler/icons-react';
import cx from 'clsx';
import classes from '../*.module.css';


function Home(props) {

    const {setColorScheme} = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', {getInitialValueInEffect: true});

    /* const {test} = normalStore((state) => ({
        test: state.test
    })); */
    const [counter, setCounter] = useState(0)

    return (
        <div style={{alignItems: "start"}}>
            <div>Home page</div>

            <button onClick={() => setCounter(prevState => prevState + 1)}> increment counter</button>
            <div>counter {counter}</div>

            <ActionIcon
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                variant="default"
                size="xl"
                aria-label="Toggle color scheme"
            >
                <IconSun className={cx(classes.icon, classes.light)} stroke={1.5}/>
                <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5}/>
            </ActionIcon>
        </div>
    )
}

export default Home
