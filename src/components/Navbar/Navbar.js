import React, { useState } from 'react'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from './Navbar.elements'
import { FaBattleNet, FaBars, FaTimes, FaHome, FaUserAlt, FaBriefcase, FaGlasses } from 'react-icons/fa'

import { IconContext } from 'react-icons'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>

                    <LogoContainer>
                        <FaBattleNet />
                        <p>Learn -</p>
                        <p>F(X)</p>
                    </LogoContainer>

                    <MobileIcon onClick={() => setShowMenu(!showMenu)} >
                        {showMenu ? <FaTimes/> :<FaBars />}                        
                    </MobileIcon>
                    <Menu open={showMenu} >
                        <MenuItem >
                            <MenuItemLink onClick={() => setShowMenu(!showMenu)}>
                                <div>
                                    <FaHome />
                                    HOME
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMenu(!showMenu)}>
                                <div>
                                    <FaUserAlt/>
                                    ABOUT ME
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMenu(!showMenu)}>
                                <div>
                                    <FaBriefcase/>
                                    PORTFOLIO
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMenu(!showMenu)}>
                                <div>
                                    <FaGlasses/>
                                    CONTACT ME
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>

            </Wrapper>
        </Container>
    )
}

export default Navbar