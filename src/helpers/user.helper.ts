import { STATUS_CODE, UserMsgs } from "../constants";
import { IResponseType, IUser } from "../interfaces";
import { RedisService } from "../services";
//modifying
import * as amqp from 'amqplib/callback_api'

require('../services/con.js')

const users = require('../models/model')
import Web3 from "web3";


const web3 = new Web3('https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');


class UserHelper {

    getLatestBLock = async () => {

        let latestBlock = await web3.eth.getBlockNumber()
        console.log("Latest Block: ", latestBlock)
        let block_data = await web3.eth.getBlock(latestBlock)

        console.log("\n**********************TRANSACTION DETAILS**********************\n", block_data);


        const blockNo = (await RedisService.getString("current_block")) || latestBlock;
        if (+blockNo <= latestBlock) {
            await RedisService.setString("current_block", +blockNo + 1)
        }
        console.log("Current Block: ", latestBlock)


        var block_details = new users({
            block_number: latestBlock,
            data: block_data
        })


        amqp.connect('amqp://localhost', function (error0: any, connection: any) {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function (error1: any, channel: any) {
                if (error1) {
                    throw error1;
                }
                console.log("channel created")
                var queue = 'blockdata';
                //var msg: any = block_details;
                channel.assertQueue(queue, {
                    durable: false
                });
                //send message as buffer


                channel.sendToQueue(queue, Buffer.from(JSON.stringify(block_details)));

                channel.consume(queue, function (block_details: any) {
                    console.log(" [x] Received");
                    //console.log(JSON.parse(block_details.content.toString()));
                }, { noAck: true });

                console.log(block_details.toString('utf8'));

                block_details.save((err: any, doc: any) => {
                    if (!err)
                        console.log("success")
                    else
                        console.log('Error during record insertion : ' + err);
                });
            });
        });


        // await block_details.save((err: any, doc: any) => {
        //     if (!err)
        //         console.log("success")
        //     else
        //         console.log('Error during record insertion : ' + err);
        // });




    }

    getUser = async (): Promise<IResponseType<IUser | void>> => {
        let latestBlock = await web3.eth.getBlockNumber()
        console.log(latestBlock)

        try {
            return {
                data: { BlockNumber: latestBlock },
                status: STATUS_CODE.ok,
                message: UserMsgs.user_success
            }


        } catch (err) {
            return {
                message: UserMsgs.user_error,
                status: STATUS_CODE.error
            }
        }
    }

}




export default new UserHelper();
