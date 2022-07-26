import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
  } from "graphql";
  import { BlogComments } from "../../Entities/BlogComments";
  import { BlogCommentType } from "../TypeDefs/BlogComment";
  
  export const GET_ALL_BLOG_COMMENTS = {
    type: new GraphQLList(BlogCommentType),
    resolve() {
      return BlogComments.find();
    },
  };
  
  export const GET_BLOG_COMMENT = {
    type: BlogCommentType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, args: any) {
      const result = await BlogComments.findOneBy({ id: args.id });
      return result;
    },
  };
  