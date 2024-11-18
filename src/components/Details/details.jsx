// material ui
import { Card,CardHeader,CardContent, Typography } from '@mui/material';

// react chart js 2
import { Doughnut } from 'react-chartjs-2';



export const Details = ({type}) => {


    return (
        <Card style={{borderBottom: type == "income" ? "5px solid green":"5px solid red"}}>
            <CardHeader title="income"/>
            <CardContent>
                <Typography variant='h5'>$50</Typography>
                {/* <Doughnut data="DATA"/> */}
            </CardContent>
        </Card>
    )
}