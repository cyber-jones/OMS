const generateId = () => {
    return Math.random().toString().split(".")[1].slice(0, 5);
};


export default generateId;