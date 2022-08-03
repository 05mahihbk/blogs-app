import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from "graphql";


export type UserFields = {
  id: number;
  first_name: string;
  last_name: string;  
  email: string;  
  password: string;  
  status: number;  
};

export const UserType = new GraphQLObjectType({
  name: "User",
  description: "User Type Definition",
  fields: () => ({
    id: { type: GraphQLID },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    status: { type: GraphQLBoolean },
  }),
});


export const AuthType = new GraphQLObjectType({
  name: "Auth",
  description: "Auth Type Definition",
  fields: () => ({
    token: { type: GraphQLString },
  }),
});
