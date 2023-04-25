import * as React from 'react';
import {
	Typography,
	Box,
	AppBar,
	Toolbar,
	IconButton,
	Divider,
	Input,
	Drawer
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SideBar from './sidebar';
import {
	Search,
	AccountCircle
} from '@mui/icons-material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function Topbar() {
	const drawerWidth = 280;

	const [isMobile, setIsMobile] = React.useState(true);
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const toggleDrawer = () => { setMobileOpen(!mobileOpen); };
	React.useEffect(function mount() {
		function setMobile () {
			setIsMobile(window.innerWidth <= drawerWidth * 5);
		}
		setMobile();
		window.addEventListener("resize", setMobile);
	});
	return (
		<>
			<AppBar position='fixed' sx={{
				zIndex: (theme) => theme.zIndex.drawer + 1
			}}>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box>
						<IconButton onClick={toggleDrawer} sx={{ display: !isMobile ? 'none' : 'block' }}>
							<MenuIcon sx={{color: 'white'}} />
						</IconButton>
					</Box>
					<Box sx={{ marginLeft: 2, flexGrow: 1 }}>
						<Typography>
							KMITL Graph
						</Typography>
					</Box>
					<Box sx={{ display: 'inline-flex' }}>
						<Box sx={{display: isMobile ? 'none' : 'block'}}>
							<Input/>
							<Search></Search>
						</Box>
						<NotificationsActiveIcon></NotificationsActiveIcon>
						<AccountCircle></AccountCircle>
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer
				variant={isMobile? 'temporary':'permanent'}
				open={mobileOpen}
				sx={{
					position: isMobile? 'absolute' : 'unset',
					display: 'block',
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
				}}
			>
				<Toolbar />
				<Box sx={{display: !isMobile ? 'none' : 'block'}}>
					<Input/>
					<Search></Search>
				</Box>
				<SideBar></SideBar>
			</Drawer>
		</>
	)
}
