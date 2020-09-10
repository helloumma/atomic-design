import React from 'react';
import { Grid } from '@material-ui/core'
import SectionOne from '../organisms/ComponentOne'

const Example = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <SectionOne />
            </Grid>
        </Grid>
    )
}

export default Example