import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import img from '../../utils/img/foto.jpeg';
import IconMenu from '../iconMenu';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}));

export default function BadgeAvatars() {
  return (
    <Stack direction="row" spacing={2} style={{ display: 'flex' }}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <a href="/perfil">
          <Avatar
            style={{ margin: 0, padding: 0, marginLeft: 5 }}
            alt="Remy Sharp"
            src={img}
          />
        </a>
      </StyledBadge>
      <IconMenu />
    </Stack>
  );
}
