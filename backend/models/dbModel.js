const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
     name:{type: String, required: true},
     phoneNumber: {type: String, required: true},
     email: {
         type: String, 
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },

     date: {type: String, required: true}
});

const Form = mongoose.model('formData', formSchema);

module.exports = Form;

