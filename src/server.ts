import { Application } from "express"
import bootsrap from "./bootsrap"

const server = bootsrap.then(async (app: Application) => {
    app.listen(3000, () => {
        console.log(`Listening on port ${3000} in mode....`)
    })
})

export default server
