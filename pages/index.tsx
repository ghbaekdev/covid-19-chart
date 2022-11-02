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
    <Wrap>
      <Dashboard>
        <ByDate data={date.data} />
        <AgeGenderChartBox>
          <ByAge data={ageGender.data} />
          <ByGender data={ageGender.data} />
        </AgeGenderChartBox>
      </Dashboard>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  width: 1180px;
  height: 1016px;
  background-color: #f8f8f8;
`;

export const Dashboard = styled.div`
  width: 1165px;
  height: 976px;
  border: 1px solid rgba(204, 204, 204, 0.5);
  padding-top: 40px;
  background-color: #ffffff;
`;

export const AgeGenderChartBox = styled.div`
  display: flex;
`;
