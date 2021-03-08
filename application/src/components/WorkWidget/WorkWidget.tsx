import { Grid } from "@material-ui/core";
import React from "react";
import WorkWidgetInfo from "../WorkWidgetInfo/WorkWidgetInfo";
import styled from "styled-components";

type WorkWidgetPropsType = {
  work: IWork;
};

const StyledWorksTile = styled(Grid)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 35px 16px 0px;
  flex: 50%;
  height: 290px;
  border: 1px solid ${(props) => props.theme.colors.light};
`;

const StyledImageContainer = styled.div`
  height: 190px;
  align-self: center;
  flex: 1;
`;

const StyledWorkTileImage = styled.img`
  max-height: 100%;
  height: inherit;
`;

const StyledWorkTagLabel = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 16px;
  line-height: 16px;
  min-width: 70px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  border: 1px solid ${(props) => props.theme.colors.cloud};
  padding: 0px 5px;
`;

const WorkWidget: React.FC<WorkWidgetPropsType> = ({ work }) => {
  return (
    <StyledWorksTile
      item
      onClick={() => {
        window.location.href = work.url;
      }}
    >
      {!work.tags.includes("Available") && work.tags.length && (
        <StyledWorkTagLabel>{work.tags[0]}</StyledWorkTagLabel>
      )}
      <StyledImageContainer>
        <StyledWorkTileImage src={work.image} alt={"Artists work"} />
      </StyledImageContainer>
      <WorkWidgetInfo title={work.title} price={work.price} />
    </StyledWorksTile>
  );
};

export default WorkWidget;
