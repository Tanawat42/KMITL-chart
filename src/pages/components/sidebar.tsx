import * as React from 'react';
import {
	Toolbar,
	List,
	ListItem,
	ListItemButton
} from '@mui/material'

export default function SideBar() {
	return (
		<>
			<List>
				<ListItem>
					<ListItemButton>
						Student1
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>
						Student2
					</ListItemButton>
				</ListItem>
			</List>
		</>
	);
}
