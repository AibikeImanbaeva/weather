
import {ReactNode, useState} from 'react';
import { ThemeContext } from '../context/ThemeContext';

import { Theme } from '../context/ThemeContext';
import { changeCssRootVariables } from '../model/changeCssVariables';
import { Storage } from '../model/Storage';


interface Props {
    children: ReactNode,
}

export const ThemeProvider = ({children, ...props}: Props)=>{
const [theme, setTheme] = useState<Theme> (Storage.getItem('theme') || Theme.DARK)
function changeTheme (theme: Theme ){
    Storage.setItem('theme', theme)
    setTheme(theme);
    changeCssRootVariables(theme)
}
return <ThemeContext.Provider value={{
    theme,
    changeTheme,
}}
{...props}>
    {children}
</ThemeContext.Provider>
}