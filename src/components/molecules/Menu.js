import React from 'react'
import { Grid } from '@material-ui/core'
import { NewButton, DropDown } from '../atoms'

const Menu = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <DropDown /><NewButton variant="contained" color="primary" buttonText={'Click here'}/>
            </Grid>
        </Grid>
    )
}

export default Menu