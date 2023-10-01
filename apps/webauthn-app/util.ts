import * as fs from 'node:fs';

import type { Authenticator, Database, UserModel } from './types';

const DB_STRING = 'db.json';
const database = fs.readFileSync(DB_STRING, { encoding: 'utf8' });

export function getUserFromDB(userId: string): UserModel {
  const { users } = JSON.parse(database) as Database;

  return users.find((user: UserModel) => {
    return user.id === userId;
  }) as UserModel;
}

export function getUserAuthenticators(userId: string): Authenticator[] {
  const { authenticators } = JSON.parse(database) as Database;

  return authenticators.filter((item: Authenticator) => {
    return item.userId === userId;
  });
}

export function setUserCurrentChallenge(
  userId: string,
  challenge: string,
): void {
  const data = JSON.parse(database);

  for (const user_ of data.users) {
    if (userId === user_.id) {
      // eslint-disable-next-line functional/immutable-data
      user_.currentChallenge = challenge;
      break;
    }
  }

  fs.writeFileSync(DB_STRING, JSON.stringify(data, null, 2));
}

export function saveNewUserAuthenticatorInDB(
  userId: string,
  authenticator: Partial<Authenticator>,
): void {
  const data = JSON.parse(database) as Database;

  // eslint-disable-next-line functional/immutable-data
  data.authenticators.push({
    ...authenticator,
    userId,
  } as Authenticator);

  fs.writeFileSync(DB_STRING, JSON.stringify(data, null, 2));
}
