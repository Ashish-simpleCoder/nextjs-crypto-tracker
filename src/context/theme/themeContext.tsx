import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";

interface IThemeContenxt {
    darkTheme: boolean
    toggleDarkTheme: () => void
}
const ThemeContext = createContext<IThemeContenxt>({} as IThemeContenxt)

const theme: boolean = JSON.parse(global?.localStorage?.getItem('dark-theme')! || 'false')

export const ThemeContextProvider = ({children}: {children: ReactNode}) => {
    const [darkTheme, setDarkTheme] = useState(theme)
    const toggleDarkTheme = useCallback(() => setDarkTheme(theme => !theme), [])
    const memoThemeStates = useMemo(() => ({darkTheme, toggleDarkTheme }), [darkTheme])


    useEffect(()=>{
        localStorage.setItem('dark-theme',JSON.stringify(darkTheme))
        document.body.classList.toggle('dark-theme',darkTheme)
    },[darkTheme])

    return(
        <ThemeContext.Provider value={memoThemeStates}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)