import React from 'react'
import { Grid } from '@material-ui/core'
import { Title } from '../atoms'
import Menu from '../molecules/Menu'

const ComponentOne = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Title title={'Atomic Design'}/>
                <Menu />
            </Grid>
        </Grid>
    )
}

export default ComponentOne