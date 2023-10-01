import {
  generateRegistrationOptions,
  verifyRegistrationResponse,
} from '@simplewebauthn/server';
import express from 'express';

import { origin, rpID, rpName } from './constants';
import type { Authenticator, UserModel } from './types';
import {
  getUserAuthenticators,
  getUserFromDB,
  saveNewUserAuthenticatorInDB,
  setUserCurrentChallenge,
} from './util';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  const { userId } = request.query;

  const user = getUserFromDB(userId as string);
  response.json(user);
});

app.post('/register/start', async (request, response) => {
  const { userId } = request.body;
  const user: UserModel = getUserFromDB(userId);

  const userAuthenticators: Authenticator[] = getUserAuthenticators(userId);

  const options = await generateRegistrationOptions({
    attestationType: 'none',
    excludeCredentials: userAuthenticators.map(authenticator => {
      return {
        id: authenticator.credentialID,
        transports: authenticator.transports,
        type: 'public-key',
      };
    }),
    rpID,
    rpName,
    userID: userId,
    userName: user.username,
  });

  setUserCurrentChallenge(user.id, options.challenge);

  response.json(options);
});

app.post('/register/finish', async (request, response) => {
  const { data, userId } = request.body;

  const user: UserModel = getUserFromDB(userId);
  const expectedChallenge = user.currentChallenge as string;

  let verification;
  try {
    verification = await verifyRegistrationResponse({
      expectedChallenge,
      expectedOrigin: origin,
      expectedRPID: rpID,
      response: data,
    });
  } catch (error) {
    console.error(error);
    return response.status(400).send({ error: JSON.stringify(error) });
  }

  if (verification.verified) {
    const { registrationInfo } = verification;

    if (registrationInfo) {
      const { credentialPublicKey, credentialID, counter } = registrationInfo;

      const newAuthenticator: Partial<Authenticator> = {
        counter,
        credentialID,
        credentialPublicKey,
      };

      saveNewUserAuthenticatorInDB(userId, newAuthenticator);
    }
  }
});

app.post('/login/start', (request, response) => {});

app.post('/login/finish', (request, response) => {});

app.listen(3000, () => {
  console.info(`Server is listening on port http://localhost:3000`);
});
