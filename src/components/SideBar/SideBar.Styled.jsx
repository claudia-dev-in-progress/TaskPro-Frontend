import styled from 'styled-components';

import { Box } from '@mui/material';

export const SideBarStyled = styled(Box)`
  position: fixed;
  height: 100%;
  width: 225px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  background: #121212;
  padding: 14px;

  @media screen and (min-width: 1280px) {
    width: 100%;
    max-width: 260px;
    padding: 24px 24px 24px 24px;
    overflow-x: hidden;
  }
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoIcon = styled.svg`
  width: 32px;
  height: 32px;
  fill: white;
`;

export const PlusIcon = styled.svg`
  width: 20px;
  height: 20px;

  stoke: black;
`;
export const PlusButton = styled.button`
  background: #bedbb0;
  padding: 8px 10px;
  border-radius: 6px;
`;

export const LogoutIcon = styled.svg`
  width: 32px;
  height: 32px;
  /*   stroke: white;
  background-color: transparent; */
`;
export const BoardsContainer = styled.div`
  height: 61px;
  width: 225px;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 10px;
  border-radius: 4px;
  margin-left: -14px;
  border-right: 4px solid;
  padding-left: 20px;
  @media screen and (min-width: 1280px) {
    width: 260px;
    margin-left: -24px;
  }
`;

export const IconTitle = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  fill: white;
`;

export const Title = styled.div`
  text-align: left;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  flex-direction: row;
`;

export const Edit = styled.svg`
  width: 16px;
  height: 16px;
  stroke: transaprent;
  margin-right: 8px;
  opacity: 50%;
`;

export const Delete = styled.svg`
  width: 16px;
  height: 16px;
  stroke: white;
  opacity: 50%;
  fill: #1f1f1f;
`;

export const BoardLink = styled.link`
  width: 100%;
  height: 100%;
  padding: 24px 20px;
  font-size: 14px;
`;
export const IconsBox = styled.div`
  right: 24px;
  gap: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (min-width: 1280px) {
    margin-right: 10px;
  }
`;
export const TitleBox = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const IconLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;
export const IconPuzzle = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  stroke: #ffffff80;
`;
export const SectionLight = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 10px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: left;
  align-items: center;
  opacity: 50%;
`;
