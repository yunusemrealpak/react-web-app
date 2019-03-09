import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    Container, Image, Menu, Visibility,
} from 'semantic-ui-react'
import { menuStyle, fixedMenuStyle } from '../helpers/styleHelper';

import { Link, NavLink } from 'react-router-dom';
import '../css/Header.css';

class Header extends React.Component {

    state = {
        menuFixed: null,
        overlayFixed: false
    };

    stickTopMenu = () => this.setState({ menuFixed: true });
    unStickTopMenu = () => this.setState({ menuFixed: null });

    render() {
        const { menuFixed } = this.state
        return (
            <div>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed && 'top'}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text>
                            <Menu.Item>
                                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                            </Menu.Item>
                            <Menu.Item header as={NavLink} to="/" exact>Movieapp</Menu.Item>
                            <Menu.Item as={NavLink} to="/movies" exact>
                                Movies
                             </Menu.Item>
                            <Menu.Item as={NavLink} to="/movies/new" exact>Add New</Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
            </div>
        )
    }
}

export default Header;