import React, {useState} from 'react'
import Form from '../../layouts/Form';
import { ButtonGroup, Grid, InputAdornment, makeStyles, Button as MuiButton } from '@material-ui/core';
import {Input, Select, Button} from '../../controls';
import ReplayIcon from '@material-ui/icons/Replay';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';




const pMethods = [
    {id: 'none', title: 'Select'},
    {id: 'Cash', title: 'Cash'},
    {id: 'Card', title: 'Card'},
]

const useStyles = makeStyles(theme => ({
    adornmentText: {
        '& .MuiTypography-root':{
            color: '#f3b33d',
            fontWeight: 'bolder',
            fontSize: '1.5em'
        }
    }
}))

export default function OrderForm(props) {

    const {values, errors, handleInputChange} = props;
    const classes = useStyles();
    return (
        <Form>
            <Grid container>
                <Grid item xs = {6}>
                    <Input
                    disabled
                    label = "Order Number"
                    name = "orderNumber"
                    value = {values.orderNumber}
                    InputProps = {{
                        startAdornment: <InputAdornment
                        className = {classes.adornmentText}
                        position = "start">#</InputAdornment>
                    }}
                    />
                    <Select
                    label = "Customer"
                    name = "customerId"
                    value = {values.customerId}
                    onChange= {handleInputChange}
                    options = {[
                        {id: 0, title : 'Select'},
                        {id: 1, title : 'Customer1'},
                        {id: 2, title : 'Customer2'},
                        {id: 3, title : 'Customer3'},
                        {id: 4, title : 'Customer4'},
                    ]}
                    />
                        
                </Grid>
                <Grid item xs = {6}>
                <Select
                    label = "Payment Method"
                    name = "pMethod"
                    value = {values.pMethod}
                    options = {pMethods}
                    onChange= {handleInputChange}
                    />
                <Input
                    disabled
                    label = "Grand Total"
                    name = "gTotal"
                    value = {values.gTotal}
                    InputProps = {{
                        startAdornment: <InputAdornment
                        className = {classes.adornmentText}
                        position = "start">$</InputAdornment>
                    }}
                    />
                    <ButtonGroup>
                    <MuiButton
                    size = "large"
                    endIcon = {<RestaurantMenuIcon />}
                    type = "submit">Submit</MuiButton> 

                    <MuiButton
                    size = "small"
                    startIcon = {<ReplayIcon />}
                    /> 
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Form>
    )
}