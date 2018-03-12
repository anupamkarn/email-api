var config = {
    mail: {
        type: 'SMTP',
        smtp_host: 'smtp.gmail.com',
        smtp_port: '587',
        options: {
            secure: false,
            service: 'Gmail',
            auth: {
                user: 'hiteshnayak305@gmail.com',
                pass: 'hn4nov96'
            }
        }
    },
    database: {
        client: 'mongoose',
        connection: {
            url: ''
        },
    }  
};
// Export config
module.exports = config;
