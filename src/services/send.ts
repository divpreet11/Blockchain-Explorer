import * as amqp from 'amqplib/callback_api'
import { connection } from 'mongoose';
import { RABBIT_HOST } from '../constants/evnconfig';
import blockHelper from '../helpers/block.helper';
import userHelper from '../helpers/user.helper';


class Rabbitservice {
    constructor() {
        this.connect();
    }
    async connect() {


        amqp.connect('amqp://localhost', function (error0: any, connection: any) {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function (error1: any, channel: any) {
                if (error1) {
                    throw error1;
                }

            });
        });
    }
}
export default new Rabbitservice