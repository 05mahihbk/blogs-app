import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from "graphql";

export type BlogCommentFields = {
  id: number;
  comment: string;
  blog_id: number;  
  user_id: number;  
  name: string;  
  email: string;  
  phone: string;  
  status: number;  
};

export const BlogCommentType = new GraphQLObjectType({
  name: "BlogComment",
  description: "Blog Comment Type Definition",
  fields: () => ({
    id: { type: GraphQLID },
    comment: { type: GraphQLString },
    blog_id: { type: GraphQLID },
    user_id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    status: { type: GraphQLBoolean },
  }),
});