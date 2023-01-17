import { useContext } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { RiMoonFill } from 'react-icons/ri';
import Switch from 'react-switch';
import { ThemeContext } from '../../store/ThemeContext';
import { SwitchIcons } from './ThemeSwitcher.styled';

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <>
      <Switch
        checked={theme.name === 'dark'}
        onChange={toggleTheme}
        offColor={theme.colors.backgroundColor}
        onColor={theme.colors.backgroundColor}
        checkedHandleIcon={
          <SwitchIcons>
            <RiMoonFill />
          </SwitchIcons>
        }
        uncheckedHandleIcon={
          <SwitchIcons>
            <BsSunFill />
          </SwitchIcons>
        }
        uncheckedIcon={false}
        checkedIcon={false}
        onHandleColor="#2C2D32"
        offHandleColor="#2C2D32"
      />
    </>
  );
};
export default ThemeSwitcher;
