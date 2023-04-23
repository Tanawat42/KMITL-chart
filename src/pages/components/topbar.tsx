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
import { Search, AccountCircle } from '@mui/icons-material';

export default function Topbar() {
	const drawerWidth = 280;

	const [isMobile, setIsMobile] = React.useState(true);
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const toggleDrawer = () => { setMobileOpen(!mobileOpen); };
	React.useEffect(function mount() {
		function setMobile () {
			setIsMobile(window.innerWidth <= drawerWidth * 3);
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
					<IconButton onClick={toggleDrawer} sx={{ display: !isMobile ? 'none' : 'block' }}>
						<MenuIcon sx={{color: 'white'}} />
					</IconButton>
					<Divider orientation="vertical" variant="middle" flexItem sx={{
						display: !isMobile ? 'none' : 'block',
						margin: 1
					}}/>
					<Box sx={{ display: 'inline-flex', marginLeft: 2 }}>
						<Typography>
							KMITL Graph
						</Typography>
						<Divider orientation="vertical" variant="middle" flexItem sx={{
							display: isMobile ? 'none' : 'block',
							margin: 1
						}}/>
					</Box>
					<Box sx={{ display: 'inline-flex' }}>
						<Box sx={{display: isMobile ? 'none' : 'block'}}>
							<Input/>
							<Search></Search>
						</Box>
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
