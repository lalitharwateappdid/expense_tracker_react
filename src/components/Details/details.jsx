// material ui
import { Card,CardHeader,CardContent, Typography } from '@mui/material';

// react chart js 2
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';



export const Details = ({title}) => {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

    return (
        <Card style={{borderBottom: title == "income" ? "5px solid green":"5px solid red"}}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant='h5'>$50</Typography>
                <Doughnut data={data}/>
            </CardContent>
        </Card>
    )
}