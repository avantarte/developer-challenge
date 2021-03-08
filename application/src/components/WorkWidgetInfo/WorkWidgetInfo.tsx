import NumberFormat from "react-number-format";
import React from "react";
import styled from "styled-components";

type WorkWidgetInfoPropsType = {
  title: string;
  price: number;
};

const StyledWorkTileInfo = styled.div`
  height: 60px;
  flex: 1;
  padding: 5px 0px 10px;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledWorkTileTitle = styled.div`
  align-self: flex-start;
  line-height: 18px;
  width: 100%;
  color: ${(props) => props.theme.colors.dark};
`;
const StyledWorkTilePrice = styled.div`
  align-self: flex-start;
  line-height: 18px;
  width: 100%;
  color: ${(props) => props.theme.colors.storm};
`;

const WorkWidgetInfo: React.FC<WorkWidgetInfoPropsType> = ({
  title,
  price,
}) => {
  return (
    <StyledWorkTileInfo>
      <StyledWorkTileTitle>{title}</StyledWorkTileTitle>
      <StyledWorkTilePrice>
        <NumberFormat
          value={price}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}
          prefix={"€"}
        />
      </StyledWorkTilePrice>
    </StyledWorkTileInfo>
  );
};

export default WorkWidgetInfo;
