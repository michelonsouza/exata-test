/* eslint-disable prefer-object-spread */
import { fakerPT_BR as faker } from '@faker-js/faker';

import { CharacterStatus } from '@/enums';
import { Character } from '@/models';

const characterStatus = ['Alive', 'Dead', 'unknown'] as CharacterStatus[];

export function makeCharacter(
  externalCharacter: Partial<Character> = {} as Character,
): Character {
  return Object.assign(
    {
      id: faker.number.int({ min: 1, max: 1000 }),
      name: faker.person.fullName(),
      status:
        characterStatus[Math.floor(Math.random() * characterStatus.length)],
      species: faker.animal.type(),
      gender: faker.person.gender(),
      created: faker.date.recent().toISOString(),
      image: faker.image.avatar(),
      episode: [faker.internet.url()],
      url: faker.internet.url(),
      type: faker.animal.type(),
      location: {
        created: faker.date.recent().toISOString(),
        name: faker.location.city(),
        dimension: faker.location.country(),
        id: faker.number.int({ min: 1, max: 1000 }),
        residents: [faker.person.fullName()],
        type: faker.location.countryCode(),
        url: faker.internet.url(),
      },
      origin: {
        created: faker.date.recent().toISOString(),
        name: faker.location.city(),
        dimension: faker.location.country(),
        id: faker.number.int({ min: 1, max: 1000 }),
        residents: [faker.person.fullName()],
        type: faker.location.countryCode(),
        url: faker.internet.url(),
      },
    },
    externalCharacter,
  );
}
