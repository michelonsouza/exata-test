import { fakerPT_BR as faker } from '@faker-js/faker';
import { render, makeCharacter } from '@/utils/test-utils';
import { Character } from '@/models';

let data: Character;

import { CharacterCard, CharacterCardProps } from '@/components';
import { CharacterStatus } from '@/enums';

describe('CharacterCard', () => {
  beforeEach(() => {
    data = makeCharacter();
  });
  it('shoud be able render component', () => {
    const container = render<CharacterCardProps>(CharacterCard, {
      props: {
        character: data,
      },
    });

    const sut = container.getByTestId('character-card');

    expect(sut).toBeDefined();
  });
  it('shoud be able pass optional type', () => {
    const internalData = makeCharacter({ type: '' });
    const container = render<CharacterCardProps>(CharacterCard, {
      props: {
        character: internalData,
        index: 1,
      },
    });

    const sut = container.getByTestId('character-card-info-label-value-type');

    expect(sut.innerHTML).toEqual('Desconhecido');
  });
  it('shoud be able pass status is unknown', () => {
    const internalData = makeCharacter({ status: CharacterStatus.UNKNOWN });
    const container = render<CharacterCardProps>(CharacterCard, {
      props: {
        character: internalData,
        index: 1,
      },
    });

    const sut = container.getByTestId('character-card-info-label-value-status');

    expect(sut.innerHTML).toEqual('Desconhecido');
  });
  it('shoud be able pass dataTestId prop', () => {
    const dataTestId = faker.lorem.slug();
    const container = render<CharacterCardProps>(CharacterCard, {
      props: {
        character: data,
        dataTestId,
      },
    });

    const sut = container.getByTestId(dataTestId);

    expect(sut.innerHTML).toBeDefined();
  });
});
