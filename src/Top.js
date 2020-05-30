import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export const LeftBarList = ({ className, children, ...props }) => {

    const classes = useStyles();

    return (
        <div className={className}>
            <div
                className={clsx(classes.list, {
                    [classes.fullList]: false,
                })}
                role="presentation"
                onClick={() => { }}
                onKeyDown={() => { }}
            >

                <List >
                    {['UerInfo', 'UerInfo1', 'UerInfo2', 'UerInfo3'].map((text, index) => (
                        <Link key={text} style={{ textDecoration: "none" }} to={"/UserInfo"}>
                            <ListItem button >
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div >
        </div>
    )
};



export function LeftDrawer({ className, children, ...props }) {
    //console.log(className)
    //console.log(children)
    //console.log(props)
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(!state);
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: false,
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['UerInfo', 'UerInfo1', 'UerInfo2', 'UerInfo3'].map((text, index) => (
                    <Link key={text} style={{ textDecoration: "none" }} to={"/UserInfo"}>
                        <ListItem button >
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        <div className={className}>
            <Button onClick={toggleDrawer(true)}>{<MenuIcon></MenuIcon>}</Button>
            <Drawer anchor={'left'} open={state} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>
    );
}
