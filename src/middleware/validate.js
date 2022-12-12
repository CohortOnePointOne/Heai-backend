import { celebrate, Joi, Segments } from 'celebrate';

export default class Validate {
  static userRegistration = celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(6).required(),
      username: Joi.string().min(3).max(32).required(),
      email: Joi.string().min(6).max(255).required().email(),
      password: Joi.string().min(8).max(127).required(),
    }),
  });

  static signIn = celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().min(3).max(320).required().email(),
      password: Joi.string().min(8).max(127).required(),
    }),
  });

  static posted = celebrate({
    [Segments.BODY]: Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().required(),
      bio: Joi.string().required(),
      telephone: Joi.string().required(),
      username: Joi.string().required(),
      profileId: Joi.string().required(),
      userId: Joi.string().required(),
    }),
  });
}
