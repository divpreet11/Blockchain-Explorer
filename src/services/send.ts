import * as amqp from 'amqplib/callback_api'
import { connection } from 'mongoose';
import { RABBIT_HOST } from '../constants/evnconfig';
import blockHelper from '../helpers/block.helper';
import userHelper from '../helpers/user.helper';
//import getUser from '../helpers/user.helper';
//import block_details from "../helpers/user.helper";

//import userHelper from '../helpers/user.helper'


class Rabbitservice {
    constructor() {
        this.connect();
    }


    // connect() {


    //     amqp.connect('amqp://localhost', function (error0: any, connection: any) {
    //         if (error0) {
    //             throw error0;
    //         }
    //         //connectionr = connection;
    //         connection.createChannel(function (error1: any, channel: any) {
    //             if (error1) {
    //                 throw error1;
    //             }
    //             var queue = 'hello';
    //             var msg = getUser.getUser
    //             //create queue
    //             channel.assertQueue(queue, {
    //                 durable: false
    //             });
    //             //send message aas buffer
    //             // channel.sendToQueue(queue, Buffer.from(msg: Number));
    //             channel.publish('logs', '', Buffer.from('msg'));
    //             console.log(" [x] Sent %s", msg);

    //         });
    //     });

    //     setTimeout(function () {
    //         //connection.close();
    //         process.exit(0)
    //     }, 500);

    // }




    //correct


    async connect() {


        amqp.connect('amqp://localhost', function (error0: any, connection: any) {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function (error1: any, channel: any) {
                if (error1) {
                    throw error1;
                }
                console.log("channel created")
                // var queue = 'blockdata';
                // var msg = 'hello';
                // channel.assertQueue(queue, {
                //     durable: false
                // });
                // //send message as buffer
                // channel.sendToQueue(queue, Buffer.from('msg'));
                // console.log(" [x] Sent %s", msg);

            });
        });

        //correct

    }
}
export default new Rabbitservice