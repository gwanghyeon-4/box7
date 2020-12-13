import globalRouters from "../routers/globalRouter";

const homeController = (req, res) => {
    res.render("screens/home");
};

const breadController = (req, res) => {
    res.render("screens/bread");  
};

const globalController = {
    homeController,
    breadController,


};

export default globalController;
