import type { NextPage } from 'next';
import styled from 'styled-components';
import ByAge from '../components/ByAge/ByAge';
import ByDate from '../components/ByDate/ByDate';
import ByGender from '../components/ByGender/ByGender';
import { useQuery } from '@tanstack/react-query';
import { getCovidDecide, getCovidGenAge } from '../api/getCovidApi';
import Loading from '../components/Loading/Loading';
import NotFound from '../components/NotFound/NotFound';

const Home: NextPage = () => {
  const date = useQuery(['getbydate'], () => getCovidDecide());

  const ageGender = useQuery(['getgenage'], () => getCovidGenAge());

  if (date.isLoading || ageGender.isLoading) return <Loading />;
  if (date.isError || ageGender.isError) return <NotFound />;
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
  background-color: #ffffff;
`;

export const AgeGenderChartBox = styled.div`
  display: flex;
`;
