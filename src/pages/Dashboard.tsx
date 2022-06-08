import styled from "@emotion/styled";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Page } from "components";
import { ACTIONS } from "consts";

const Item = styled(Paper)({
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  height: "100px",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
});

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <Typography variant='h4' textAlign='center'>{t('Hello,')}</Typography>
      <Grid container spacing={2} margin={10} >
        <Grid item xs={6} md={4}>
      <Button variant="contained">Hello World</Button>
      </Grid>
      </Grid>

        
    </Page>
  );
};

export { Dashboard };
