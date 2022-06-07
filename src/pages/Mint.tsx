import { Page } from 'components'
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";

const Item = styled(Paper)({
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  height: "100px",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
});

const Mint = () => {
  const {t} = useTranslation()
  return (
    <Page>
      <Typography variant='h4' textAlign='center'>{t('Mint')}</Typography>
      </Page>
  )
}

export {Mint}