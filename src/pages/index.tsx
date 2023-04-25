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
import {
	DataGrid,
	GridColDef,
	GridValueGetterParams 
} from '@mui/x-data-grid';
import { Masonry } from '@mui/lab';
import {
	Chart,
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	RadialLinearScale
} from 'chart.js'
import { Bar, Line, Radar } from 'react-chartjs-2';
import {
	BarChart,
	ShowChart,
	Visibility
} from '@mui/icons-material';

import Topbar from './components/topbar';
import ChartsContainer from './components/chartscontainer';
import { truncate } from 'fs';

const inter = Inter({ subsets: ['latin'] });

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(RadialLinearScale);
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
							<Box sx={{ display: 'flex', flexDirection: { xs: "column", md: "row" }}}>
								<ChartsContainer>
									{
										<Line data={{
											labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
											datasets: [
												{
													data: [65, 59, 80, 81, 56, 55, 40]
												},
												{
													data: [25, 49, 90, 82, 54, 53, 45]
												}
											]
										}} options={{responsive: true, maintainAspectRatio: true}} />
									}
									{
										<Radar
											data={{
												labels: ['Skill1', 'Skill2', 'Skill3', 'Skill4'],
												datasets: [{
													label: "skill",
													data: [20, 10, 4, 2]
												}]
											}}
										>
										</Radar>
									}
								</ChartsContainer>
								<List>
									<ListItem>
										<ListItemButton selected>
											Scores
										</ListItemButton>
									</ListItem>
									<ListItem>
										<ListItemButton>
											Skill sets
										</ListItemButton>
									</ListItem>
									<ListItem>
										<ListItemButton>
											Leaderboard
										</ListItemButton>
									</ListItem>
								</List>
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
								<Divider />
								<Box>
									<DataGrid
										sx = {{
											border: 'none'
										}}
										rows={[
											{ id: 'idcode123', subj: 'Computer Science', gpa: '4.0' }
										]}
										columns={[
											{ field: 'id', headerName: 'ID', width: 100 },
											{ field: 'subj', headerName: 'Subject', width: 240 },
											{ field: 'gpa', headerName: 'GPA', width: 50 }
										]}
										// pageSize={5}
										// rowsPerPageOptions={[5]}
										checkboxSelection
									/>
								</Box>
							</Container>
						</Paper>
					</Box>
				</Masonry>
			</Container>
		</Box>
    </>
  )
}
