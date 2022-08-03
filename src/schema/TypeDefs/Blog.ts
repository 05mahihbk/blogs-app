import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from "graphql";

export type BlogFields = {
  id: number;
  title: string;
  description: string;  
  user_id: number;  
  author: string;  
  status: number;  
};

export const BlogType = new GraphQLObjectType({
  name: "Blog",
  description: "Blog Type Definition",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    user_id: { type: GraphQLID },
    author: { type: GraphQLString },
    status: { type: GraphQLBoolean },
  }),
});
