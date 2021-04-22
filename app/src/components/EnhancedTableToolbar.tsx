import * as React from 'react';
import { createStyles, makeStyles, Theme, lighten } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useToolbarStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}),
);
export interface EnhancedTableToolbarProps {
  numSelected: number;
}


export default function EnhancedTableToolbar  (props: EnhancedTableToolbarProps)  {
const classes = useToolbarStyles();
const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
     })}
    >
     {numSelected > 0 ? (
       <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
         {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
         Orders
       </Typography>
     )}
    </Toolbar>
  );
};