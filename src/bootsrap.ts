import express, { Application } from 'express'
import { json, urlencoded } from 'body-parser'


async function load(): Promise<Application> {
    const app = express()
    app.use(json({ limit: '2mb' }))
    app.use(urlencoded({ limit: '2mb', extended: true }))
    return app
}
export default load()