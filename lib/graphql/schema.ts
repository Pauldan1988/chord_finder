import { gql } from "apollo-server-micro";

export const typeDefs = gql`

  type Message {
    message: String
  }
  
  type Query {
    hello: Message
  }`