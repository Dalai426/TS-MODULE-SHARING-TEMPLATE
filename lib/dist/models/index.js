"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.dalai = void 0;
const zod_1 = require("zod");
exports.dalai = "dalai";
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(), // UUID string
    name: zod_1.z.string().min(1), // Non-empty string
    age: zod_1.z.number().int().min(0), // Non-negative integer
    email: zod_1.z.string().email(), // Valid email address
});
//# sourceMappingURL=index.js.map