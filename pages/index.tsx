import type { NextPage } from 'next';
import styled from 'styled-components';
import ByDate from '../components/ByDate/ByDate';

const Home: NextPage = () => {
  return (
    <>
      <Dashboard>
        <ByDate />
      </Dashboard>
    </>
  );
};

export default Home;

export const Dashboard = styled.div`
  width: 1165px;
  height: 976px;
`;
