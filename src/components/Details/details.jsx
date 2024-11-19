import { useContext } from 'react';

// material ui
import { Card,CardHeader,CardContent, Typography } from '@mui/material';




// react chart js 2
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

// useContext
import { ExpenseTrackerContext } from '../../context/context';

export const Details = ({title}) => {

  const {transactions} = useContext(ExpenseTrackerContext)

  const transaction_data = []

  // console.log(transactions.length)

  for(let i=0;i<transactions.length;i++){
    if(transactions[i]?.type == `${title}`){
      
      transaction_data.push(transactions[i].amount)
      
    }
  }

  let total_data = 0
  transaction_data.forEach(num => {
    total_data += Number(num)
  })
  // console.log(transaction_data)

    const data = {
        labels: [
          // 'Red',
          // 'Blue',
          // 'Yellow'
        ],
        datasets: [{
          label: `${title}`,
          data: transaction_data,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 10
        }]
      };

    return (
        <Card style={{borderBottom: title == "income" ? "5px solid green":"5px solid red"}}>
            <CardHeader style={{textTransform:"capitalize"}} title={title}/>
            <CardContent>
                <Typography variant='h5'>${total_data}</Typography>
                {
                  total_data == 0 ? (
                    <>
                    <p style={{fontWeight:"600", textAlign:"center"}}>No Data Found</p>
                    {/* <Doughnut data={data}/> */}
                    </>
                  ):(
                    <Doughnut data={data}/>

                  )
                }
            </CardContent>
        </Card>
    )
}