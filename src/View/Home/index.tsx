import { Form, Formik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import {
  getAllPokemon,
  getFilterPokemon,
  getOnePokemon,
  getSearchPokemon,
} from '../../api/services/pokemon';
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

interface PokemonsProps {
  id: string;
  name: string;
  imageUrl: string;
  types: [];
}

interface PokemonProps {
  imageUrl: string;
  id: string;
  name: string;
  types: [];
  info: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonsProps[]>([]);
  const [pokemon, setPokemon] = useState<PokemonProps>({} as PokemonProps);
  const [typeFilter, setTypeFilter] = useState({ value: '', label: 'Tipos' });
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleResetPagination = useCallback(() => {
    setPage(0);
    setTotalPages(0);
  }, []);

  const handleGetAllPokemon = useCallback(async (pageNumber) => {
    try {
      const response = await getAllPokemon(pageNumber * 20, 20);
      setPokemons(response.pokemons);
      setTotalPages(Math.floor(response.qtdPokemons / 20));
    } catch (error) {
      // Aqui iria vim alguma integração com o sentry, para monitorar erros na aplicação.
    }
    setPage(pageNumber);
  }, []);

  const handleAplyFilter = useCallback(
    async (value) => {
      setTypeFilter(value);
      try {
        if (value.value !== '') {
          const response = await getFilterPokemon(value.value);
          setPokemons(response);
          handleResetPagination();
        } else {
          handleGetAllPokemon(0);
        }
      } catch (error) {
        handleResetPagination();
        // Aqui iria vim alguma integração com o sentry, para monitorar erros na aplicação.
      }
    },
    [handleGetAllPokemon, handleResetPagination],
  );

  const handleSearchSubmit = useCallback(
    async (value, resetForm) => {
      try {
        if (value.search) {
          const response = await getSearchPokemon(value.search);
          setPokemons([response]);
          handleResetPagination();
          setTypeFilter({ value: '', label: 'Tipos' });
        } else {
          handleGetAllPokemon(0);
        }
      } catch (error) {
        handleResetPagination();
        setTypeFilter({ value: '', label: 'Tipos' });
        // Aqui iria vim alguma integração com o sentry, para monitorar erros na aplicação.
      }
      resetForm();
    },
    [handleGetAllPokemon, handleResetPagination],
  );

  const handleOpenModal = useCallback(async (id) => {
    try {
      const response = await getOnePokemon(id);
      setPokemon(response);
    } catch (error) {
      // Aqui iria vim alguma integração com o sentry, para monitorar erros na aplicação.
    }
    setIsOpenModal((currentIsOpenModal) => !currentIsOpenModal);
  }, []);

  useEffect(() => {
    handleGetAllPokemon(0);
  }, [handleGetAllPokemon]);

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
            handleSearchSubmit(values, resetForm);
          }}
        >
          <Form>
            <ContainerFilter>
              <Search name="search" placeholder="Pesquise seu Pokémon!" />
              <SelectTypes
                typeValue={typeFilter}
                setValue={(value) => handleAplyFilter(value)}
              />
            </ContainerFilter>
          </Form>
        </Formik>
        <ContainerPokemonCard>
          <Grid>
            {pokemons.map(({ id, name, imageUrl, types }) => (
              <CardPokemon
                key={id}
                id={id}
                imgUrl={imageUrl}
                name={name}
                types={types}
                isOpenModal={() => handleOpenModal(id)}
              />
            ))}
          </Grid>
        </ContainerPokemonCard>
        <PaginationComponent
          handleGetAllPokemon={handleGetAllPokemon}
          page={page}
          totalPages={totalPages}
        />
      </Container>
      {isOpenModal && (
        <ModalCustom
          id={pokemon.id}
          imgUrl={pokemon.imageUrl}
          info={pokemon.info}
          name={pokemon.name}
          types={pokemon.types}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </Root>
  );
};

export default Home;
