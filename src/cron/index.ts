
import { schedule } from "node-cron";
import { UserHelper } from "../helpers";
import { RedisService } from "../services";

//import consume from '../services/consume'
import { CronJob } from "cron"

export default class MangeCron {

    constructor() {

        //start cron
        console.log("CRON STARTED")
        this.getBlocks()



    }


    async getBlocks() {
        schedule("*/20 * * * * *", async () => {
            await UserHelper.getLatestBLock()
        })
    }

}


