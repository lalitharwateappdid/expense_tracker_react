// material ui
import { Card,CardHeader,CardContent, Typography } from '@mui/material';

// react chart js 2
import { Doughnut } from 'react-chartjs-2';



export const Details = ({title}) => {


    return (
        <Card style={{borderBottom: title == "income" ? "5px solid green":"5px solid red"}}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant='h5'>$50</Typography>
                {/* <Doughnut data="DATA"/> */}
            </CardContent>
        </Card>
    )
}