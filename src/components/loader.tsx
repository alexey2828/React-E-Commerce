import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { FC } from 'react';

const Loader: FC = () => {
  return (
    <Box style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 15 }}>
      <CircularProgress color="success"/>
    </Box>
  );
}

export default Loader;