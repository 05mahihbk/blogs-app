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
  
  /**
	* For Get all blog comments
	*
	* param null
	* 
	* return all blog comments data.
	*/
  export const GET_ALL_BLOG_COMMENTS = {
    type: new GraphQLList(BlogCommentType),
    async resolve(_: any, args: any, context:any) {
      if(!context.isValidRequest) throw new Error("Invalid Access");

      return BlogComments.find();
    },
  };
  
  /**
	* For Get Single Blog Comment By Id
	*
	* param id
	* 
	* return Single blog comment data.
	*/
  export const GET_BLOG_COMMENT = {
    type: BlogCommentType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, args: any, context:any) {
      if(!context.isValidRequest) throw new Error("Invalid Access"); 
      
      const result = await BlogComments.findOneBy({ id: args.id });
      return result;
    },
  };
  