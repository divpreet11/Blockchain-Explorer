import * as amqp from 'amqplib/callback_api'

class consume {
    constructor() {
        this.connect1();
    }
    connect1() {


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
export default new consume