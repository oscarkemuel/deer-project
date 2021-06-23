// import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { FaBars } from 'react-icons/fa';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AiFillHome, AiFillStar, AiFillProject } from 'react-icons/ai';
import { BsFillHeartFill } from 'react-icons/bs';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Nav from './Nav';
import styled from '../styles/components/Header.module.scss';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

const Header: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List className={styled.navPhone}>
        <AnchorLink href="#home">
          <ListItem button>
            <ListItemIcon>
              <AiFillHome />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </AnchorLink>

        <Divider />
        <AnchorLink href="#proposito">
          <ListItem button>
            <ListItemIcon>
              <AiFillStar />
            </ListItemIcon>
            <ListItemText primary="Propósito" />
          </ListItem>
        </AnchorLink>

        <Divider />
        <AnchorLink href="#historia">
          <ListItem button>
            <ListItemIcon>
              <AiFillProject />
            </ListItemIcon>
            <ListItemText primary="Sobre" />
          </ListItem>
        </AnchorLink>

        <Divider />
        <AnchorLink href="#doar">
          <ListItem button>
            <ListItemIcon>
              <BsFillHeartFill />
            </ListItemIcon>
            <ListItemText primary="Doar" />
          </ListItem>
        </AnchorLink>
        <Divider />
      </List>
    </div>
  );

  return (
    <header className={styled.header}>
      <img src="/static/images/logo5.png" alt="" />
      <Nav />
      <>
        <FaBars onClick={toggleDrawer('left', true)} className="icon" />
        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </>
    </header>
  );
};

export default Header;
