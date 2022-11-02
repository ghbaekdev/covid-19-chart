import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import arrow from '../../public/assets/selectarrow.png';

interface labelsType {
  labels: string[];
  handleSelected: (selected: string) => void;
  selected: string | undefined;
}

const SelectDate = ({ labels, handleSelected, selected }: labelsType) => {
  const [selectModal, setSelectModal] = useState(false);
  return (
    <SelectBox>
      <SelectTitle onClick={() => setSelectModal(!selectModal)}>
        {selected}
        <Image alt="arrow" src={arrow} />
      </SelectTitle>
      {selectModal && (
        <SelectGame>
          {labels.map((option, index) => {
            return (
              <SelectOption value={option} key={index}>
                <button
                  onClick={() => {
                    handleSelected(option);
                    setSelectModal(!selectModal);
                  }}>
                  {option}
                </button>
              </SelectOption>
            );
          })}
        </SelectGame>
      )}
    </SelectBox>
  );
};

export default SelectDate;

export const SelectOption = styled.li`
  list-style: none;

  button {
    font-size: 12px;
    font-weight: 500;
    height: 16px;
    line-height: 16px;
    width: 100%;
    text-align: left;
    padding: 0 14px;
    border: 0;
    background: none;
    border-radius: 0;
    &:hover {
      background: #eeeeee;
    }
  }
`;
export const SelectGame = styled.ul`
  background: #f8f8f8;
  border-radius: 4px;
  width: 60px;
  padding: 8px 0;
  max-height: 60px;
  overflow: auto;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  margin: 0;
`;

const SelectBox = styled.section`
  position: absolute;
  top: 0px;
  left: 270px;
`;

const SelectTitle = styled.button`
  font-size: 12px;
  font-weight: 500;
  height: 16px;
  line-height: 16px;
  border: none;
  background-color: white;
`;
