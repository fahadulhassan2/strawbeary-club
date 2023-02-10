import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarLink2,
    SidebarMenu,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen,toggle,Dark}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="collection" onClick={toggle}>
                        Collection
                    </SidebarLink>
                    <SidebarLink to="history" onClick={toggle}>
                        History
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Roadmaps
                    </SidebarLink>
                    <SidebarLink2 to="/traits" onClick={toggle}>
                        Traits
                    </SidebarLink2>
                    <SidebarLink2 to="/login" onClick={toggle}>
                        Log In
                    </SidebarLink2>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Mint</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;