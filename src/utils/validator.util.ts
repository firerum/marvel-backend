import * as Joi from 'joi';
import { CreateMutant } from 'src/marvel/dto/create.dto';
import { UpdateMutant } from 'src/marvel/dto/update.dto';

export const validateCreateMutant = (body: CreateMutant): any => {
  const schema = Joi.object({
    name: Joi.string().lowercase().trim().required(),
    status: Joi.boolean().required().default(true),
    gender: Joi.string().valid('male', 'female', 'other').trim().required(),
    age: Joi.number().integer().min(1).max(2000).required().messages({
      'number.min': 'Age must be greater than 1',
      'number.max': 'Age is too long',
    }),
    accomplices: Joi.array().items(Joi.string().trim()).required(),
    enemies: Joi.array().items(Joi.string().trim()).required(),
    created_at: Joi.date().timestamp().default(new Date()),
  });
  return schema.validate(body);
};

export const validateUpdateMutant = (body: UpdateMutant): any => {
  const schema = Joi.object({
    name: Joi.string().lowercase().trim(),
    status: Joi.boolean(),
    gender: Joi.string().valid('male', 'female', 'other').trim(),
    age: Joi.number().integer().min(1).max(2000).messages({
      'number.min': 'Age must be greater than 1',
      'number.max': 'Age is too long',
    }),
    accomplices: Joi.array().items(Joi.string().trim()),
    enemies: Joi.array().items(Joi.string().trim()),
    updated_at: Joi.date().timestamp().default(new Date()),
  });

  return schema.validate(body);
};
