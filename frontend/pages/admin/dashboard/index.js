import DailyActivity from '@/components/Admin/dashboard/DailyActivity'
import ProductPerfomance from '@/components/Admin/dashboard/ProductPerfomance'
import SalesOverview from '@/components/Admin/dashboard/SalesOverview'
import { Grid } from '@mui/material'
import React from 'react'

const index = ({ products }) => {
    return (
        <Grid container spacing={0}>

            <Grid item xs={12} lg={12}>
                <SalesOverview />
            </Grid>
            <Grid item xs={12} lg={4}>
                <DailyActivity />
            </Grid>
            <Grid item xs={12} lg={8}>
                <ProductPerfomance type={"Top"} products={products?.slice(0, 4)} />
            </Grid>
        </Grid>
    )
}

export default index