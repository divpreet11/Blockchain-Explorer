import { Router, Request, Response, json } from "express";
import { STATUS_CODE } from "../constants";
import UserHelper from "../helpers/user.helper";
import { Controller } from "../interfaces";



export default class UserController implements Controller {

    public router = Router();
    path = "/user";

    constructor() {
        this.router.route(this.path).get(this.getUser)
        // this.router.route(this.path).post(this.postdata)
    }

    getUser(req: Request, res: Response) {

        const userData = UserHelper.getUser();
        userData.then((res) => {
            const blockNumber = res.data?.BlockNumber
            console.log(blockNumber)
        })
        res.status(STATUS_CODE.ok).json({
            userData

        })
        //console.log(`userdata ${userData}`)
    }
    //PostData
    // postdata(req: Request, res: Response) {
    //     const postData = UserHelper.postdata(req.body);
    //     //console.log(req.body)
    //     res.status(postData.status).json(postData)

    // }
    //end
}