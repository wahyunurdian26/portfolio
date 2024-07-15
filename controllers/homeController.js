import UserModel from '../model/userModel.js';

const homeController = async (req, res) => {
    try {
        res.render('index'); // Pastikan Anda memiliki file views/index.ejs
    } catch (error) {
        console.log(error.message);
    }
};


//user contact controller
const ContactUserController = async(req, res) => {
    try {
        const data = new UserModel({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        });

        if (data) {
            await data.save();
            console.log("User saved successfully");
        }
        res.render('index');
    } catch (error) {
        console.log(error.message);
    }
}

export { homeController, ContactUserController };
