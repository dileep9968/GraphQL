import { GraphQLServer, PubSub } from 'graphql-yoga'
import Query from './resolvers/Query'
import Comment from './resolvers/Comment'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import Post from './resolvers/Post'
import User from './resolvers/User'
import db from './db'

const pubsub = new PubSub()
const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers:{
        Query,
        Comment,
        Mutation,
        Subscription,
        Post,
        User
        
    },
    context:{
        db:db,
        pubsub
    }
})

server.start(() => {
    console.log('The server is up!')
})