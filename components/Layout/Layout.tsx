import styled from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout({ children }) {
  return (
    <MainWrap>
      <Sidebar />
      {children}
    </MainWrap>
  );
}

const MainWrap = styled.div`
  display: flex;
`;
