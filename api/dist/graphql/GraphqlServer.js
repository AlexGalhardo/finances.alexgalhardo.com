"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _apolloServer = require("apollo-server");
const GraphqlServer = new _apolloServer.ApolloServer({
    context: {
        hello: "world"
    },
    csrfPrevention: true,
    cache: "bounded",
    typeDefs: (0, _apolloServer.gql)`
        type User {
            id: ID!
            name: String!
            email: String!
            password: String!
            reset_password_token: String!
            created_at: String!
            updated_at: String!
        }

        input UserInput {
            name: String!
            email: String!
            password: String!
        }

        type Transaction {
            id: ID!
            type: String!
            category: String!
            description: String!
            amount: Int!
            created_at: String!
            updated_at: String!
        }

        input TransactionInput {
            type: String!
            category: String!
            description: String!
            amount: Int!
        }

        type Account {
            id: ID!
            type: String!
            category: String!
            description: String!
            amount: Int!
            created_at: String!
            updated_at: String!
        }

        type Query {
            users: [User!]!
            transactions: [Transaction!]
        }

        type Mutation {
            createUser(data: UserInput!): User!
            createTransaction(data: TransactionInput!): Transaction!
        }
    `,
    resolvers: {
        Query: {},
        Mutation: {
            createUser: async ()=>{
                return null;
            }
        }
    }
});
const _default = GraphqlServer;
