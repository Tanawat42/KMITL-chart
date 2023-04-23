import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import {
	Container,
	Typography,
	Box,
	Toolbar,
	Paper,
	Button,
	ListItem,
	List,
	ListItemButton,
	Divider
} from '@mui/material';
import { Masonry } from '@mui/lab';
import {
	Chart,
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2';
import {
	BarChart,
	ShowChart,
	Visibility
} from '@mui/icons-material';

import Topbar from './components/topbar';

const inter = Inter({ subsets: ['latin'] });

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);
Chart.register(PointElement);
Chart.register(LineElement);


export default function Home() {
  return (
    <>
		<Box sx={{ display: 'flex'}}>
			<Topbar />
			<Container sx={{ width: '100%', padding: 2 }}>
				<Toolbar />
				<Masonry columns={{ lg: 2, md: 1 }} spacing={2} sx={{ display: { xs:'block', md: 'flex' } }}>
					<Box>
						<Paper elevation={3} sx={{ display:'flex', padding: 3 }}>
							<Box>
								<img src="https://brsc.sa.edu.au/wp-content/uploads/2018/09/placeholder-profile-sq.jpg" width="125"></img>
							</Box>
							<Container>
								<Typography variant='h5'>Student Information</Typography>
								<Typography variant='h6'>Student ID: 6542****
									<Button>
										<Visibility></Visibility>
									</Button>
								</Typography>
								<Typography variant='h6'>Age: 19</Typography>
								<Typography variant='h6'>Birth Gender: male</Typography>
							</Container>
						</Paper>
					</Box>
					<Box>
						<Paper elevation={3} sx={{ padding: 3 }}>
							<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
								<Typography variant='h5'>
									Overall Statistics
								</Typography>
								<Typography variant='h6'>
									🔻 -0.42% 🥇 42<sup>nd</sup>
								</Typography>
							</Box>
							{/* 
								<Line data={{
									labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
									datasets: [{
										data: [65, 59, 80, 81, 56, 55, 40]
									}]
								}} options={{responsive: true, maintainAspectRatio: false}} />
							*/}
							<Box sx={{ display: 'flex' }}>
								<Typography>test</Typography>
							</Box>
							<Divider />
							<Typography variant='h5'>
								Subjects
							</Typography>
							<List>
								<ListItem>
									<ListItemButton>
										Calculus 1
									</ListItemButton>
								</ListItem>
								<ListItem>
									<ListItemButton>
										Physics
									</ListItemButton>
								</ListItem>
								<ListItem>
									<ListItemButton>
										Physics (Lab)
									</ListItemButton>
								</ListItem>
								<ListItem>
									<ListItemButton>
										Drawing and Computer Aided Design
									</ListItemButton>
								</ListItem>
								<ListItem>
									<ListItemButton>
										Computer Programming
									</ListItemButton>
								</ListItem>
							</List>
						</Paper>
					</Box>
					<Box>
						<Paper elevation={3}>
							<Container>
								<Typography variant='h5'>Grades</Typography>
							</Container>
						</Paper>
					</Box>
				</Masonry>
			</Container>
		</Box>
    </>
  )
}
