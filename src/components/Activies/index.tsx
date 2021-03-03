import React from 'react';
import { 
  Area, 
  ResponsiveContainer, 
  AreaChart, 
  XAxis, 
  YAxis,
  LineChart,
  Line 
} from 'recharts';

import { 
  Container,
  ATitle,
  ChartContainer,
  ChartInfo
} from './styles'

const Activies = () => {
  const data = [
    {
      name: 'Mon',
      uv: 20
    },
    {
      name: 'Tue',
      uv: 40,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Wed',
      uv: 33
    },
    {
      name: 'Thu',
      uv: 28
    },
    {
      name: 'Fri',
      uv: 35
    },
    {
      name: 'Sat',
      uv: 42
    },
    {
      name: 'Sun',
      uv: 36
    },
  ];
  return (
    <Container>
      <ATitle>
          <h3>Activies</h3>
          <button>This Week</button>
        </ATitle>

        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
            >
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis width={23} stroke="#ccc" />
              <Area type="monotone" dataKey="uv" strokeWidth={4} stroke="#FF9049" fill="#eee" />
            </AreaChart>
          </ResponsiveContainer>
          <ChartInfo>
            <h5>Total Spending</h5>
            <span>2.800,00</span>
          </ChartInfo>
        </ChartContainer>
    </Container>
  )
};

export default Activies;