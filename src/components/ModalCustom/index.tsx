import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Tags } from '../tags';
import {
  ButtonClose,
  Container,
  ContainerTags,
  Root,
  Text,
  TextTitle,
} from './styles';

interface ModalCustomProps {
  setIsOpenModal: (args: boolean) => void;
  imgUrl: string;
  id: string;
  name: string;
  types: [];
  info: string;
}

export const ModalCustom: React.FC<ModalCustomProps> = ({
  setIsOpenModal,
  id,
  imgUrl,
  name,
  types,
  info,
}) => {
  return (
    <Root>
      <Container>
        <ButtonClose onClick={() => setIsOpenModal(false)}>
          <AiOutlineClose size={32} />
        </ButtonClose>
        <img src={imgUrl} alt={name} />
        <Text type="id">{`#${id}`}</Text>
        <TextTitle>{name}</TextTitle>
        <Text>Emperor Pokémon</Text>
        <ContainerTags>
          {types.map(({ typeName }) => (
            <Tags key={typeName} type={typeName} />
          ))}
        </ContainerTags>
        <Text type="textSubtitle">Pokédex Entry</Text>
        <Text type="text">{info}</Text>
      </Container>
    </Root>
  );
};
