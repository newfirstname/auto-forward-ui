import React from 'react';
import { Navbar, Dropdown, Nav, Icon } from 'rsuite';
import { useHistory } from 'react-router-dom';

const Navbarq = () => {
  const history = useHistory();

  // const [theme, setTheme] = useState('light')

  // const darkThemePath = './css/dark.css'
  // const lightThemePath = './css/light.css'

  const onHomeClick = () => {
    history.push('/');
  };

  const onLoginClick = () => {
    history.push('/login');
  };

  const onNewClick = () => {
    history.push('/new');
  };

  // const getThemeIcon = () => {
  // 	const i = theme === 'dark'
  // 		? 'sun-o'
  // 		: 'moon-o'

  // 	return i
  // }

  // const onThemeClick = () => {
  // 	if(theme === 'light') {
  // 		setTheme('dark')
  // 		document.getElementById('theme-link').href = darkThemePath
  // 		} else {
  // 			setTheme('light')
  // 			document.getElementById('theme-link').href = lightThemePath
  // 	}
  // }

  return (
    <>
      <Navbar className="mb-4">
        <Navbar.Body>
          <Nav>
            <Nav.Item onClick={onHomeClick} icon={<Icon icon="home" />}>
              Home
            </Nav.Item>
            <Dropdown title="Insert">
              <Dropdown.Item onClick={onNewClick}>New connector</Dropdown.Item>
              <Dropdown.Item>Team</Dropdown.Item>
              <Dropdown.Item>Login</Dropdown.Item>
            </Dropdown>
          </Nav>
          <Nav pullRight>
            {/* <Nav.Item onClick={onThemeClick} icon={<Icon icon={getThemeIcon()} />} ></Nav.Item> */}
            <Nav.Item onClick={onLoginClick} icon={<Icon icon="sign-in" />}>
              Login
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </>
  );
};

export default Navbarq;
