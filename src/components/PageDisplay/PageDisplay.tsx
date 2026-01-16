import React from 'react';
import {Container, Paper, Typography} from "@mui/material";
import Spinner from "../UI/Spinner/Spinner.tsx";

interface Props {
  title: string;
  content: string;
  isLoading: boolean;
}


const PageDisplay: React.FC<Props> = ({title, content, isLoading}) => {
  return (
    <Container maxWidth="md">
      {isLoading
        ?
        <Spinner isLoading={isLoading} />
        :
        <>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 600,
              textAlign: "center",
              mb: 4,
            }}
          >
            {title}
          </Typography>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
            }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
            >
              {content}
            </Typography>
          </Paper>
        </>
      }
    </Container>
  );

};

export default PageDisplay;