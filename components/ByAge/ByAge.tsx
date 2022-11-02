import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import styled from 'styled-components';
import { AgeGenderDataType, AgeGenderType } from '../../types/types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const options = {
  indexAxis: 'y' as const,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        padding: 15,
        font: {
          lineHeight: 1,
          size: 12,
        },
      },
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      grid: {
        display: false,
      },
      stacked: true,
    },
  },
};

const ByAge = ({ data }: AgeGenderDataType) => {
  const stateDt = data?.item
    .map(
      (covid: AgeGenderType) =>
        `${covid.stateDt.slice(4, 6)}/${covid.stateDt.slice(6, 8)}`
    )
    .sort();
  const filterDate = new Set(stateDt);
  const labels = [...filterDate].slice(0, 5);

  const filterAge = (age: string) => {
    return data?.item
      .filter((covid: AgeGenderType) => covid.gubun === age)
      .map((covid: AgeGenderType) => covid.confCase);
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: '0-9',
        data: filterAge('0-9'),
        backgroundColor: 'rgba(98, 154, 205,0.5)',
      },
      {
        label: '10-19',
        data: filterAge('10-19'),
        backgroundColor: 'rgba(146, 135, 216, 0.5)',
      },
      {
        label: '20-29',
        data: filterAge('20-29'),
        backgroundColor: 'rgba(205, 135, 216, 0.5)',
      },
    ],
  };
  return (
    <ChartWrap>
      <ChartHeader>
        <span>일자별 연령대 확진자 수</span>
      </ChartHeader>
      <ChartBox>
        <Bar
          data={chartData}
          options={options}
          style={{ width: '100%', height: '100%' }}
        />
      </ChartBox>
    </ChartWrap>
  );
};

export default ByAge;

export const ChartWrap = styled.div`
  width: 562px;
  height: 433px;
  padding: 0 0 0 10px;
`;

export const ChartHeader = styled.header`
  border-top: 1px solid rgba(204, 204, 204, 0.5);
  border-bottom: 1px solid rgba(204, 204, 204, 0.5);
  height: 50px;
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: 500;
    margin-left: 37px;
  }
`;

const ChartBox = styled.div`
  width: 358px;
  height: 249px;
  margin: 58px 0 0 126px;
`;
