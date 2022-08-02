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
  
  /**
	* For Get All the blogs
	*
	* param null
	* 
	* return blogs data.
	*/
  export const GET_ALL_BLOGS = {
    type: new GraphQLList(BlogType),
    async resolve(_: any, args: any, context:any) {
      if(!context.isValidRequest) throw new Error("Invalid Access");
      
      return Blogs.find();
    },
  };
  
  /**
	* For Get Single Blog By Id
	*
	* param id
	* 
	* return Single blogs data.
	*/
  export const GET_BLOG = {
    type: BlogType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, args: any, context:any) {
      if(!context.isValidRequest) throw new Error("Invalid Access");
      
      if(!context.user) throw new Error("Authentication failed");

      const result = await Blogs.findOneBy({ id: args.id });
      return result;
    },
  };
  