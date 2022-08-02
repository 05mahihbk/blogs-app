import express from "express";
import { graphqlHTTP} from "express-graphql";

import cors from "cors";
import { schema } from "./schema";
import { APP_KEY } from "./config";
import {AuthService} from './Services/AuthService';
import {AppService} from './Services/AppService';

const app = express();

app.use(cors());
app.use(express.json());

var root = {
  ip: function (args, request) {
    return request.ip;
  }
};

app.use(
  '/graphql',
  graphqlHTTP(async (req, res, graphQLParams) => {
    return {
      schema,
      rootValue: root,
      graphiql: { headerEditorEnabled : true},
      context: {
        user: await AuthService.checkAuthorization(req.headers),
        isValidRequest: await AppService.checkValidRequest(req.headers),
        req: req,
      }
    }
  })
)

export default app;
