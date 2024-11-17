import { Theme, alpha, Components } from '@mui/material/styles';
import { gray, green } from '../themePrimitives';

/* eslint-disable import/prefer-default-export */
export const feedbackCustomizations: Components<Theme> = {
  MuiAlert: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 10,
        backgroundColor: green[100],
        color: theme.palette.text.primary,
        border: `1px solid ${alpha(green[300], 0.5)}`,
        '& .MuiAlert-icon': {
          color: green[500],
        },
        ...theme.applyStyles('dark', {
          backgroundColor: `${alpha(green[900], 0.5)}`,
          border: `1px solid ${alpha(green[800], 0.5)}`,
        }),
      }),
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiDialog-paper': {
          borderRadius: '10px',
          border: '1px solid',
          borderColor: theme.palette.divider,
        },
      }),
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: 8,
        borderRadius: 8,
        backgroundColor: gray[200],
        ...theme.applyStyles('dark', {
          backgroundColor: gray[800],
        }),
      }),
    },
  },
};
