import { Form, Formik } from 'formik';
import React, { useCallback, useState } from 'react';
import Select from 'react-select';
import Header from '../../components/header';
import { Search } from '../../components/search';
import { SelectTypes } from '../../components/selectTypes';
import { Container, ContainerFilter, Grid, Root } from './styles';

const Home: React.FC = () => {
  const [typeFilter, setTypeFilter] = useState('');

  const handleAplyFilter = useCallback((value) => {
    console.log(value);
  }, []);

  const handleSubmit = useCallback((value) => {
    console.log(value);
  }, []);

  return (
    <Root>
      <Header />
      <Container>
        <Formik
          initialValues={{
            search: '',
          }}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
          }}
        >
          {(formikProps) => (
            <Form>
              <ContainerFilter>
                <Search name="search" placeholder="Pesquise seu Pokémon!" />
                <SelectTypes setValue={(value) => handleAplyFilter(value)} />
              </ContainerFilter>
            </Form>
          )}
        </Formik>

        <Grid>dasdas</Grid>
      </Container>
    </Root>
  );
};

export default Home;
