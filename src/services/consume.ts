
import * as amqp from 'amqplib/callback_api'
import { RABBIT_HOST } from '../constants';

class consume {
    constructor() {
        this.connect1();
    }
    connect1() {


        amqp.connect('amqp://localhost', function (error0: any, connection: any) {
            if (error0) {
                throw error0;
            }
            //connectionr = connection;
            connection.createChannel(function (error1: any, channel: any) {
                if (error1) {
                    throw error1;
                }
                var queue = 'blockdata';
                //var msg = 'Hello';


                //create queue
                channel.assertQueue(queue, {
                    durable: false
                });
                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
                channel.consume(queue, function (msg: any) {
                    console.log("[x] Received %s", msg.content.toString());
                    //channel.ack(msg);
                }, {
                    noAck: true
                });



            });
        });



    }
}
export default new consume