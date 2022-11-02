import type { NextPage } from 'next';
import styled from 'styled-components';
import ByAge from '../components/ByAge/ByAge';
import ByDate from '../components/ByDate/ByDate';
import ByGender from '../components/ByGender/ByGender';
import { useQuery } from '@tanstack/react-query';
import { getCovidDecide, getCovidGenAge } from '../api/getCovidApi';

const Home: NextPage = () => {
  const date = useQuery(['getbydate'], () => getCovidDecide());

  const ageGender = useQuery(['getgenage'], () => getCovidGenAge());

  return (
    <Dashboard>
      <ByDate data={date.data} />
      <AgeGenderChartBox>
        <ByAge data={ageGender.data} />
        <ByGender data={ageGender.data} />
      </AgeGenderChartBox>
    </Dashboard>
  );
};

export default Home;

export const Dashboard = styled.div`
  width: 1165px;
  height: 976px;
`;

export const AgeGenderChartBox = styled.div`
  display: flex;
`;
