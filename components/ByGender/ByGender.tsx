import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from '../ByAge/ByAge';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import SelectDate from '../SelectDate/SelectDate';
import { AgeGenderDataType, AgeGenderType } from '../../types/types';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  padding: '0px',
  responsive: false,
  maintainAspectRatio: false,
  defaultFontSize: '14px',
  width: '385',
  height: '249',
};

const ByGender = ({ data }: AgeGenderDataType) => {
  const stateDt = data?.item
    .map(
      (covid: AgeGenderType) =>
        `${covid.stateDt.slice(4, 6)}/${covid.stateDt.slice(6, 8)}`
    )
    .sort();
  const filterDate = new Set(stateDt);
  const labels = [...filterDate];
  const [selected, setSelected] = useState(labels[0]);

  const male = data?.item.filter(
    (covid: AgeGenderType) =>
      covid.gubun === '남성' && covid.stateDt === '20211101'
  )[0].confCase;
  const female = data?.item.filter(
    (covid: AgeGenderType) =>
      covid.gubun === '여성' && covid.stateDt === '20211101'
  )[0].confCase;

  const chartData = {
    labels: ['남', '여'],
    datasets: [
      {
        label: '# of Votes',
        data: [female, male],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const handleSelected = (selected: string) => {
    setSelected(selected);
  };

  return (
    <ChartWrap>
      <S.ChartHeader>
        <span>일자별 성별 확진자 수</span>
      </S.ChartHeader>
      <ChartBox>
        <Doughnut data={chartData} options={options} />
        <SelectDate
          labels={labels}
          handleSelected={handleSelected}
          selected={selected}
        />
      </ChartBox>
    </ChartWrap>
  );
};

export default ByGender;

const ChartWrap = styled(S.ChartWrap)`
  padding: 0;
  border-left: 1px solid rgba(204, 204, 204, 0.5);
`;

const ChartBox = styled.div`
  display: flex;
  position: relative;
  padding: 50px;
`;
