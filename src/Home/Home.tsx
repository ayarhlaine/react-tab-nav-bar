import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import './Home.scss';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);
export const Home: FC<{}> = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Paper elevation={3}>
                <div className={'Home__Page'}>Home Page</div>
            </Paper>
        </div>
    )
}
export default Home;