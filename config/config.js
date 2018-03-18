var config = {
    mail: {
        admin:'drupesh2008@gmail.com',
        type: 'SMTP',
        smtp_host: 'smtp.gmail.com',
        smtp_port: '587',
        options: {
            secure: false,
            service: 'Gmail',
            auth: {
                user: 'noreply.ekrishi@gmail.com',
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
