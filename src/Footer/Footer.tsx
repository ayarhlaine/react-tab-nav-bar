import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import './Footer.scss';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);
export const Footer: FC<{}> = ( ) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Paper elevation={3}>
                <div className={'Footer'}>
                    <div className={'Source'}>
                        <div className={'left'}>
                            Source : 
                        </div>
                        <div className={'Github__Link'}>
                            <a href='https://github.com/ayarhlaine/react-tab-nav-bar' className={'Source__Link'}>
                                Github
                            </a>
                        </div>
                    </div>
                    <div className={'Test'}>
                        <div className={'left'}>
                            Tested With : 
                        </div>
                        <div className={'Tested__With__Jest'}>
                            <a href='https://github.com/facebook/jest'>
                                <img src='https://img.shields.io/badge/tested_with-jest-99424f.svg' alt='Tested with Jest' />
                            </a>
                        </div>
                    </div>
                    <div className={'Status'}>
                        <div className={'left'}>
                            Build Status : 
                        </div>
                        <div className={'Build__Status'}>
                            <a href='https://travis-ci.com/ayarhlaine/react-tab-nav-bar.svg?branch=master'>
                                <img src='https://travis-ci.com/ayarhlaine/react-tab-nav-bar.svg?branch=master' alt='Coverage Status' />
                            </a>
                        </div>
                    </div>
                    <div className={'Coverage'}>
                        <div className={'left'}>
                            Coverage : 
                        </div>
                        <div className={'Covearge__Status'}>
                            <a href='https://coveralls.io/github/ayarhlaine/react-tab-nav-bar?branch=master'>
                                <img src='https://coveralls.io/repos/github/ayarhlaine/react-tab-nav-bar/badge.svg?branch=master' alt='Coverage Status' />
                            </a>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}
export default Footer;