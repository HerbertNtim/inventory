"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// ROUTES IMPORTS
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const expenseRoutes_1 = __importDefault(require("./routes/expenseRoutes"));
// CONFIGURATIONS 
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use((0, morgan_1.default)('common'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
// ROUTES
app.use('/dashboard', dashboardRoutes_1.default);
app.use('/products', productsRoutes_1.default);
app.use('/users', usersRoutes_1.default);
app.use('/expenses', expenseRoutes_1.default);
// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
