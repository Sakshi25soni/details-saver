import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://sakshi:@Sakshisoni2007@cluster0.ejyyq.mongodb.net/database?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(() => {
    console.log(`connection to database is successfull`);
}).catch((e) => {
    console.log(`the error in connection to database is ${e}`);
});