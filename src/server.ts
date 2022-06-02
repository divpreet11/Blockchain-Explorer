import express, { Express } from "express";
import { PORT } from "./constants";
import routes from "./routes";
import Cron from "./cron";
import { logger } from "./middlewares";
import bodyParser from 'body-parser';
import "./services";


class App {
    public app: Express;

    constructor() {
        this.app = express();
        this.app.use(bodyParser.json())
        this.registerMiddlewares();
        this.registerRoutes();
    }

    registerMiddlewares() {
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(logger)
    }

    registerRoutes() {
        for (const route of routes) {
            this.app.use(route)
        }
    }

    public listen(): void {
        this.app.listen(PORT, () => {

            new Cron()
            console.log("Server is running on port:", PORT)

        })
    }
}

export default App;

