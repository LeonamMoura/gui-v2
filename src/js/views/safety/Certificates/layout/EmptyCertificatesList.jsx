import React from 'react';

import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const EmptyCertificatesList = ({ toggleShowRegistration }) => {
  const { t } = useTranslation('certificates');

  return (
    <Box style={{ height: '100%' }} padding={2}>
      <Grid
        style={{ height: '100%' }}
        direction='column'
        alignItems='center'
        justify='center'
        container
      >
        {/* <DevicesOther fontSize='large' /> */}

        <Box paddingY={1}>
          <Typography variant='h6'>{t('noCertificateFound')}</Typography>
        </Box>

        <Button
          color='primary'
          variant='contained'
          endIcon={<Add />}
          onClick={toggleShowRegistration}
        >
          Criar CA
        </Button>
      </Grid>
    </Box>
  );
};

EmptyCertificatesList.propTypes = {
  toggleShowRegistration: PropTypes.func,
};

EmptyCertificatesList.defaultProps = {
  toggleShowRegistration: null,
};

export default EmptyCertificatesList;
