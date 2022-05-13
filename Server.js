"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = __importDefault(require("./data"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
let State = data_1.default;
app.get("/", (req, res) => {
    res.json(State);
});
app.put("/:id", (req, res) => {
    State.map(item => {
        if (item._id === req.params.id) {
            item = req.body;
            console.log(req.body);
        }
        return item;
    });
    res.json(req.body);
});
app.delete("/:id", (req, res) => {
    State = State.filter(item => {
        if (item._id !== req.params.id) {
            return item;
        }
    });
    res.json({ message: `Deleted Successfully` });
});
app.post("/", (req, res) => {
    State.push(req.body);
    res.json(req.body);
});
app.listen(2000, () => {
    console.log(`server listening...`);
});
