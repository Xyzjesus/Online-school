import React from "react";
import { Page } from "components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";

const Deposit = () => {
  const {t} = useTranslation()
  return (
    <Page>
      <Typography variant='h4' textAlign='center'>{t('Deposit')}</Typography>
      <Typography variant='body2' textAlign='center'>{t('Swap TON and CPT')}</Typography>
      </Page>
  )
}

export { Deposit };
