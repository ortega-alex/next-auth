// permite procesar cualquier ruta que se ingrese por 'auth'
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./lib/db"

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise), // permite utilizar unde db para almacenar informacion de la sesion
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ]
})