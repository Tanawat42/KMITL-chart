import * as React from 'react';
import {
	Box, BoxProps
} from '@mui/material'

export default function ChartsContainer({ children }:any) {
	return (
		<>
			<Box>
				{children}
			</Box>
		</>
	);
}