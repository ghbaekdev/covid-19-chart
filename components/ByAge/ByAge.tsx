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
import { useQuery } from '@tanstack/react-query';
import { getCovidGenAge } from '../../api/getCovidApi';
import { itemType } from '../ByDate/ByDate';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const options = {
  indexAxis: 'y' as const,
  // drawTicks: true,
  // layout: {
  //   padding: {
  //     top: 30,
  //     right: 40,
  //     bottom: 40,
  //   },
  // },
  plugins: {
    legend: {
      labels: {
        padding: 5,
        // 범례 간 가로 간격을 조정할 수 있습니다. 범례의 상하 padding을 지정하는 기능은 따로 지원되지 않아요. ㅠㅠ
        font: {
          // 범례의 폰트 스타일도 지정할 수 있습니다.
          family: "'Noto Sans KR', 'serif'",
          lineHeight: 1,
          size: 12,
        },
      },
    },
  },

  responsive: false,
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

const ByAge = () => {
  const { data, isLoading } = useQuery(['getgenage'], () => getCovidGenAge());
  // console.log(
  //   data?.item
  //     .map((covid: itemType) => covid.stateDt)
  //     .sort()
  //     .map((el) => `${el.slice(4, 6)}/${el.slice(6, 8)}`)
  // );
  const stateDt = data?.item
    .map((covid: itemType) => covid.stateDt)
    .sort()
    .map((el) => `${el.slice(4, 6)}/${el.slice(6, 8)}`);
  const filterDate = new Set(stateDt);
  const labels = [...filterDate];
  console.log(labels);

  // const labels = ['', '10-19', '20-29'];
  const chartData = {
    labels,
    datasets: [
      {
        label: '0-9',
        data: data?.item
          .filter((el) => el.gubun === '0-9')
          .map((el) => el.confCase),
        backgroundColor: 'rgba(98, 154, 205,0.5)',
      },
      {
        label: '10-19',
        data: data?.item
          .filter((el) => el.gubun === '10-19')
          .map((el) => el.confCase),
        backgroundColor: 'rgba(146, 135, 216, 0.5)',
      },
      {
        label: '20-29',
        data: data?.item
          .filter((el) => el.gubun === '20-29')
          .map((el) => el.confCase),
        backgroundColor: 'rgba(205, 135, 216, 0.5)',
      },
    ],
  };
  return (
    <ChartWrap>
      <ChartHeader>
        <span>일자별 연령대 확진자 수</span>
      </ChartHeader>
      <Bar
        data={chartData}
        options={options}
        style={{ width: '358px', height: '249px' }}
      />
    </ChartWrap>
  );
};

export default ByAge;

const ChartWrap = styled.div`
  width: 562px;
  height: 433px;
  padding: 0 10px;
`;

const ChartHeader = styled.header`
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
