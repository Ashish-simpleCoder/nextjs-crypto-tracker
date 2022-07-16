import Button from '../../shared/Button'
import { useThemeContext } from '../../../context/theme/themeContext'
import Image from 'next/image'

const ToggleTheme = () => {
    const { darkTheme, toggleDarkTheme } = useThemeContext()
    return (
        <div>
            <Button handleClick={toggleDarkTheme}>
                <Image
                    src={'/imgs/' + (darkTheme ? 'dark' : 'light') + '_mode.png'}
                    alt='color icon'
                    className='theme_img'
                    height={'20px'}
                    width={'20px'}
                />
            </Button>
        </div>
    )
}
export default ToggleTheme
