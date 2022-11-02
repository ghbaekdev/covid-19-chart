import { useQuery } from '@tanstack/react-query';
import React from 'react';
import styled from 'styled-components';
import { getCovidDecide } from '../../api/getCovidApi';
import Loading from '../Loading/Loading';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface itemType {
  decideCnt: string;
  stateDt: string;
  stateTime: string;
}

const ByDate = () => {
  const { data, isLoading } = useQuery(['getbydate'], () => getCovidDecide());
  const labels = data?.item
    .map((covid: itemType) => covid.stateDt)
    .sort()
    .map((el) => `${el.slice(4, 6)}/${el.slice(6, 8)}`);
  const decideCnt = data?.item.map((covid: itemType) => covid.decideCnt);

  const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: decideCnt,
        borderColor: '#E79997',
        radius: 0,
      },
    ],
  };

  if (isLoading) return <Loading />;

  return (
    <ByDateWrap>
      <DateHeader>
        <span>코로나 일자별 확진자 수</span>
      </DateHeader>
      <ChartBox>
        <Line options={options} data={chartData} width={839} height={273} />
      </ChartBox>
    </ByDateWrap>
  );
};

export default ByDate;

const ByDateWrap = styled.div`
  width: 1164px;
`;

const DateHeader = styled.header`
  height: 88px;
  border-bottom: 1px solid rgba(204, 204, 204, 0.5);
  display: flex;
  span {
    margin: 58px 0 0 37px;
    font-size: 14px;
    font-weight: 500;
  }
`;

const ChartBox = styled.div`
  width: 839px;
  height: 273px;
  margin: 74px auto 0 auto;
`;
