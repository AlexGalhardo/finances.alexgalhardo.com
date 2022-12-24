import { ApolloServer, gql } from "apollo-server";

const GraphqlServer = new ApolloServer({
    context: { hello: "world" },
    csrfPrevention: true,
    cache: "bounded",
    typeDefs: gql`
        type User {
            id: ID!
            name: String!
            email: String!
            confirmed_email: Boolean!
            confirm_email_token: String!
            password: String!
            reset_password_token: String!
            admin: String!
            avatar: String!
            document: String!
            phone: String!
            birth_date: String!
            google_id: String!
            github_id: String!
            facebook_id: String!
            address_zipcode: String!
            address_street: String!
            address_street_number: String!
            address_neighborhood: String!
            address_city: String!
            address_state: String!
            address_country: String!
            stripe_customer_id: String!
            stripe_card_id: String!
            stripe_card_brand: String!
            stripe_card_last4: String!
            stripe_card_exp_month: String!
            stripe_card_exp_year: String!
            stripe_currently_subscription_id: String!
            stripe_currently_subscription_name: String!
            stripe_subscription_start: String!
            stripe_subscription_end: String!
            stripe_cancel_at_period_end: Boolean!
            created_at: String!
            updated_at: String!
        }

        input UserInput {
            name: String!
            email: String!
            password: String!
            document: String!
            phone: String!
            birth_date: String!
            address_zipcode: String!
            address_street: String!
            address_street_number: String!
            address_neighborhood: String!
            address_city: String!
            address_state: String!
            address_country: String!
        }

        type Blog {
            id: ID!
            title: String!
            resume: String!
            image: String!
            category: String!
            body: String!
            slug: String!
            created_at: String!
            updated_at: String!
        }

        input BlogInput {
            title: String!
            resume: String!
            image: String!
            category: String!
            body: String!
        }

        type Game {
            id: ID!
            title: String!
            year_release: Int!
            price: Int!
            resume: String!
            image: String!
            igdb_link: String
            igdb_rating: Float!
            platforms: String!
            developer: String!
            genres: String!
            amazon_link: String!
            created_at: String!
            updated_at: String!
        }

        input GameInput {
            title: String!
            year_release: Int!
            price: Int!
            resume: String!
            image: String!
            igdb_link: String
            igdb_rating: Float!
            platforms: String!
            developer: String!
            genres: String!
            amazon_link: String!
        }

        type Book {
            id: ID!
            title: String!
            year_release: Int!
            price: Int!
            author: String!
            resume: String!
            image: String!
            pages: Int!
            genres: String!
            amazon_link: String!
            created_at: String!
            updated_at: String!
        }

        input BookInput {
            title: String!
            year_release: Int!
            price: Int!
            author: String!
            resume: String!
            image: String!
            pages: Int!
            genres: String!
            amazon_link: String!
        }

        type Query {
            users: [User!]!
            blogPosts: [Blog!]
            games: [Game!]!
            books: [Book!]!
        }

        type Mutation {
            createUser(data: UserInput!): User!
            # createBlog(data: BlogInput!): Blog!
            # createGame(data: GameInput!): Game!
            # createBook(data: BookInput!): Book!
        }
    `,
    resolvers: {
        Query: {
            users: async () => {
                const users = await new InMemoryUsersRepository().getAll();
                return users.response;
            },
            blogPosts: async () => {
                return (await new InMemoryBlogRepository().getAll()).response;
            },
            games: async () => {
                return (await new InMemorGamesRepository().getAll()).response;
            },
            books: async () => {
                return (await new InMemoryBooksRepository().getAll()).response;
            },
        },
        Mutation: {
            createUser: async () => {
                return null;
            },
        },
    },
});

export default GraphqlServer;
