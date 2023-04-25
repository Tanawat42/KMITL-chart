import * as React from 'react';
import {
	Box, BoxProps
} from '@mui/material'

export default function ChartsContainer({ children }:any) {
	return (
		<>
			{/* TODO: implement pagination */}
			<Box>
				{children[0]}
			</Box>
		</>
	);
}