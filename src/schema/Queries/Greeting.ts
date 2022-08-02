import { GraphQLNonNull, GraphQLString } from "graphql";

/**
	* For Get Greeting message
	*
	* param name
	* 
	* return message
	*/
export const GREETING = {
  type: GraphQLString,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(_: any, args: any, context:any) {
    if(!context.isValidRequest) throw new Error("Invalid Access");
    
    return `Hello ${args.name}`;
  },
};
