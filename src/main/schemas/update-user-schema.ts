import { LocaleType } from '@domain/entities/User';

export const updateUserSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      minLength: 6,
      maxLength: 20,
    },
    isDarkMode: {
      type: 'boolean',
    },
    locale: {
      type: 'string',
      enum: Object.values(LocaleType)
    },
  },
  required: [],
};
