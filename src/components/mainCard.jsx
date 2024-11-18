// material ui
import { Card,CardHeader,CardContent, Typography,Divider } from '@mui/material';

// components
import { Form } from './form';

export const MainCard =() => {
    return (
        <>
           <Card>
                <CardHeader title="Expense Tracker" subheader="Create By Lalit"/>
                <CardContent>
                    {/* <Typography display="flex" alignItems="center" variant='h5'>Hello world</Typography> */}
                    <Typography style={{lineHeight:"1.5em", marginTop: "20px"}}  variant='subtitle1'>
                        Try saying:  Add Income for $100 in Category Salary for Monday...
                    </Typography>
                </CardContent>
                <Divider/>
                <CardContent>
                    <Form/>
                </CardContent>
           </Card>
        </>
    )
}

