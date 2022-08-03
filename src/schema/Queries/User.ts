import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Users } from "../../Entities/Users";
import { UserType,  UserFields } from "../TypeDefs/User";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve(parent:any, args:UserFields, context:any) {
    if(!context.isValidRequest) throw new Error("Invalid Access");

    if(!context.user) throw new Error("Authentication failed");
    return Users.find();
  },
};

export const GET_USER = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(parent: any, args: UserFields, context:any) {
    if(!context.isValidRequest) throw new Error("Invalid Access"); 

    const result = await Users.findOneBy({ id: args.id });
    return result;
  },
};


export const GET_AUTH_USER = {
  type: UserType,
  async resolve(parent: any, args: UserFields, context:any) {
    if(!context.isValidRequest) throw new Error("Invalid Access");
    if(!context.user) throw new Error("Authentication failed");
    
    return context.user;
  },
};
