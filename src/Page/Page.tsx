import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import Paper from '@material-ui/core/Paper';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import './Page.scss';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);
interface PageProp {
  activeTab: string;
}
type PagePropNull = PageProp | null;
export const Page: FC<PagePropNull> = ( { activeTab }) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Paper elevation={3}>
                <div className={'Page__Page'}>{ activeTab.toUpperCase() }</div>
            </Paper>
        </div>
    )
}
const mapStateToProps = (appState: AppState) => {
  return {
    activeTab: appState.navBar.activeTab
  }
}
export default connect(
  mapStateToProps,
  null
)(Page);
// export default Page;