import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
  } from "graphql";
  import { Blogs } from "../../Entities/Blogs";
  import { BlogType } from "../TypeDefs/Blog";
  
  export const GET_ALL_BLOGS = {
    type: new GraphQLList(BlogType),
    resolve() {
      return Blogs.find();
    },
  };
  
  export const GET_BLOG = {
    type: BlogType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, args: any) {
      const result = await Blogs.findOneBy({ id: args.id });
      return result;
    },
  };
  