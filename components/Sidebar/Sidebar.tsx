import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import DBDlogo from '../../public/assets/DBDlogo.svg';
import { SIDEBAR_LINKS } from '../../public/data/SidebarLinks ';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <SidebarWrap>
      <LogoBox>
        <Image alt="logo" src={DBDlogo} />
        <span> DBDLAB Corp.</span>
      </LogoBox>
      <CategoriesBox>
        {SIDEBAR_LINKS.map(({ title, img, url }) => {
          return (
            <Link href={url} key={title}>
              <Categories>
                {img && (
                  <div>
                    <Image alt="category logo" src={img} />
                  </div>
                )}
                {title && <span>{title}</span>}
              </Categories>
            </Link>
          );
        })}
      </CategoriesBox>
    </SidebarWrap>
  );
};

export default Sidebar;

const SidebarWrap = styled.div`
  width: 252px;
  height: 1024px;
  background: ${({ theme }) => theme.colors.sideColor};
`;

const LogoBox = styled.div`
  display: flex;
  width: 145px;
  height: 40px;
  align-items: center;
  margin: 0 auto;
  padding-top: 48px;

  span {
    font-size: 16px;
    font-weight: 500;
    padding-left: 8px;
  }
`;

const CategoriesBox = styled.div`
  font-size: 16px;
  width: 100%;
  margin: 58px 0 0 auto;
`;

const Categories = styled.div`
  padding-left: 5px;
  width: 204px;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 0 0 25px auto;
  div {
    margin-right: 8px;
  }
  span {
  }
  cursor: pointer;
`;
