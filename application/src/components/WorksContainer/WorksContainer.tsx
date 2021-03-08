import { Alert, AlertTitle } from "@material-ui/lab";
import { CircularProgress, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import WorkWidget from "../WorkWidget/WorkWidget";
import { getWorks } from "../../api/api";

const WorksContainer: React.FC = () => {
  const [works, setWorks] = useState<Array<IWork>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    getWorks().then((res) => {
      if (res.data) {
        setWorks(res.data);
      } else {
        setError(res.error);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <React.Fragment>
      {isLoading && <CircularProgress />}
      {!isLoading && !error ? (
        <Grid
          container
          direction="row"
          alignContent="center"
          alignItems="center"
        >
          {works.map((work: IWork) => (
            <WorkWidget work={work} key={work.id} />
          ))}
        </Grid>
      ) : (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Could not load works... — <strong>{error}</strong>
        </Alert>
      )}
    </React.Fragment>
  );
};

export default WorksContainer;
