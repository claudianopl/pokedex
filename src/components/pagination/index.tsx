import React from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { Button, ContainerPagination } from './styles';

interface PaginationComponentProps {
  page: number;
  totalPages: number;
  handleGetAllPokemon: (args: number) => void;
}

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
  page,
  totalPages,
  handleGetAllPokemon,
}) => {
  return (
    <ContainerPagination>
      <article>
        Página <strong>{page}</strong> de <strong>{totalPages}</strong>
      </article>
      <Button
        onClick={() => handleGetAllPokemon(page - 1)}
        disabled={page === 0}
        isPagination
      >
        <HiOutlineChevronLeft size={16} />
      </Button>
      <Button
        onClick={() => handleGetAllPokemon(page + 1)}
        disabled={page === totalPages}
      >
        <HiOutlineChevronRight size={16} />
      </Button>
    </ContainerPagination>
  );
};
