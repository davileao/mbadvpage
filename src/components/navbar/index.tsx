import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import icon from '../../assets/images/icontransparent.png';
import styles from './NavBar.module.scss';
import BalanceIcon from '@mui/icons-material/Balance';



const drawerWidth = '80%';
const navItems = [{ title: 'Home', path: '/' },
    { title: 'Áreas de atuação', path: '#especialidades' },
    { title: 'Contato', path: '#contato' }];


export default function DrawerAppBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };



    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center',}}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText>
                                <a className={styles.navlink} href={item.path}>{item.title}</a>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                ))}
            </List>
            <Divider variant={"middle"}>
                <BalanceIcon />
            </Divider>
        </Box>
    );

    return (
        <Box sx={{  display: 'flex' }}>
            <AppBar position={"sticky"} sx={{bgcolor: "#fff", border: 'none', boxShadow: 'none'}} component="nav">
                <Toolbar sx={{justifyContent: "space-between", alignContent: 'center'}}>

                    <div className={styles.logo}>
                        <a href={'/'}><img className={styles.logoImg} src={icon} alt="logo"/></a>
                    </div>
                    <a href='/' className={styles.logoTitle}>Marcus Braz</a>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon  sx={{color: '#000'}}/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Marcus Braz - Advogado
                    </Typography>
                    <Box  sx={{display: { xs: 'none', sm: 'none' }}}>
                        {navItems.map((item) => (
                              <Button href={item.path} key={item.title} sx={{ color: '#000' }}>
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    anchor={'right'}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { backgroundColor: '#fafafa', boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>



    );
}