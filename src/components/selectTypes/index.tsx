import React from 'react';
import Select from 'react-select';
import { ImRadioChecked } from 'react-icons/im';
import { Container } from './styles';

interface SelectTypesProps {
  typeValue: object;
  setValue: (value: any) => void;
}

export const SelectTypes: React.FC<SelectTypesProps> = ({
  setValue,
  typeValue,
}) => {
  const options = [
    { value: '', label: 'Tipos' },
    { value: 'fire', label: 'Fogo' },
    { value: 'water', label: 'Água' },
    { value: 'grass', label: 'Grama' },
    { value: 'flying', label: 'Voador' },
    { value: 'fighting', label: 'Lutador' },
    { value: 'poison', label: 'Veneno' },
    { value: 'electric', label: 'Elétrico' },
    { value: 'ground', label: 'Terra' },
    { value: 'rock', label: 'Pedra' },
    { value: 'psychic', label: 'Psíquico' },
    { value: 'ice', label: 'Gelo' },
    { value: 'bug', label: 'Inseto' },
    { value: 'ghost', label: 'Fantasma' },
    { value: 'steel', label: 'Ferro' },
    { value: 'dragon', label: 'Dragão' },
    { value: 'dark', label: 'Sombrio' },
    { value: 'fairy', label: 'Fada' },
  ];

  const customStyles = {
    container: (provided: any) => ({
      ...provided,
      width: '100%',
    }),
    option: (provided: any) => ({
      ...provided,
      borderBottom: '1px solid #CCCCD1',
      padding: 16,
    }),
    control: (provided: any) => ({
      width: '100%',
      ...provided,
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      outline: 0,
      color: '#CCCCD1',
    }),

    singleValue: (provided: any) => ({
      ...provided,
      color: '#CCCCD1',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    input: (provided: any) => ({
      color: '#CCCCD1',
      ...provided,
    }),
  };

  return (
    <Container>
      <ImRadioChecked size={18} />
      <Select
        placeholder="Tipos"
        value={typeValue}
        options={options}
        styles={customStyles}
        onChange={(value) => setValue(value)}
      />
    </Container>
  );
};
