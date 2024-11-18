// material ui
import { Card,CardHeader,CardContent, Typography } from '@mui/material';

export const MainCard =() => {
    return (
        <>
           <Card>
                <CardHeader title="Add Expense/Income"/>
                <CardContent>
                    <Typography variant='h5'>Hello world</Typography>
                </CardContent>
           </Card>
        </>
    )
}

