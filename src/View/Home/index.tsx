import { Form, Formik } from 'formik';
import React, { useCallback, useState } from 'react';
import { CardPokemon } from '../../components/cardPokemon';
import Header from '../../components/header';
import { ModalCustom } from '../../components/ModalCustom';
import { PaginationComponent } from '../../components/pagination';
import { Search } from '../../components/search';
import { SelectTypes } from '../../components/selectTypes';
import {
  Container,
  ContainerFilter,
  ContainerPokemonCard,
  Grid,
  Root,
} from './styles';

const Home: React.FC = () => {
  const [typeFilter, setTypeFilter] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const handleGetAllPokemon = useCallback((pageNumber) => {
    console.log(pageNumber);
  }, []);

  const handleOpenModal = useCallback((id) => {
    setIsOpenModal((currentIsOpenModal) => !currentIsOpenModal);
  }, []);

  const handleAplyFilter = useCallback(({ value }) => {
    setTypeFilter(value);
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
        <ContainerPokemonCard>
          <Grid>
            <CardPokemon isOpenModal={() => handleOpenModal('teste')} />
          </Grid>
        </ContainerPokemonCard>
        <PaginationComponent
          handleGetAllPokemon={handleGetAllPokemon}
          page={page}
          totalPages={totalPages}
        />
      </Container>
      {isOpenModal && <ModalCustom setIsOpenModal={setIsOpenModal} />}
    </Root>
  );
};

export default Home;
