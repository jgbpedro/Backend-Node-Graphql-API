'use strict';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import config from '../../config';
import { UserModel } from '../../data/user/model';
import errorBuilder from '../../services/error';

const login = async (ctx, next) => {
   try {
      const { username, password } = ctx.request.body;
      const user = await UserModel.findOne({ username });
      if (!user) {
         ctx.error = errorBuilder.badRequest('Usuario não encontrado.');
         await next();
      } else {
         const isValid = user.validPassword(password);
         if (isValid) {
            const expires = moment().add(1, 'minutes').valueOf();
            console.log(user);
            const token = jwt.sign({
               iss: user._id,
               exp: expires
            }, config.jwt.secret);
            ctx.body = {
               success: true,
               uid: user.id,
               token: 'JWT ' + token
            };
         } else {
            ctx.error = errorBuilder.badRequest('Senha Errada!');
            await next();
         }
      }
   } catch (error) {
      ctx.error = errorBuilder.internalServerError(error);
      await next();
   }
};

export default (router) => {
   router.post('/users/login', login);
};
