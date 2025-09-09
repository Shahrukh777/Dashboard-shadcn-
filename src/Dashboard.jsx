import React from 'react'
import { AppBarChart } from './components/charts/AppBarChart.tsx'
import { ChartBarActive } from './components/charts/ChartBarActive.tsx'
import { ChartPieLegend } from './components/charts/ChartPieLegend.tsx'
import { ChartPieInteractive } from './components/charts/ChartPieInteractive.tsx'
import { ChartAreaStackedExpand } from './components/charts/ChartAreaStackedExpand.tsx'
import { ChartTooltipAdvanced } from './components/charts/ChartTooltipAdvanced.tsx'

const Dashboard = () => {
  return (
    <div className='' >
      <div className=' h-screen p-3 rounded-sm grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 gap-1 xl:col-span-1 2xl:col-span-2'>
        <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2'><AppBarChart /></div>
        <div className='bg-primary-foreground p-4 rounded-lg'><ChartBarActive /></div>
        <div className='bg-primary-foreground p-4 rounded-lg'><ChartPieLegend /></div>
        <div className='bg-primary-foreground p-4 rounded-lg'><ChartPieInteractive /></div>
        <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2'><ChartAreaStackedExpand /></div>
        <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2'><ChartTooltipAdvanced /></div>
      </div>
    </div>
  )
}

export default Dashboard