import styled from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <MainWrap>{children}</MainWrap>
    </>
  );
}

const MainWrap = styled.div``;
