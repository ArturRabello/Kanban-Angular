"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./database/prisma.service");
const crypto_1 = require("crypto");
let AppController = class AppController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getHello(body) {
        const { name, columns } = body;
        console.log(body);
        const board = await this.prisma.boards.create({
            data: {
                id: (0, crypto_1.randomUUID)(),
                name: name,
                column: {
                    create: [
                        {
                            id: (0, crypto_1.randomUUID)(),
                            name: columns.name[0],
                            task: {
                                create: [
                                    {
                                        Id: (0, crypto_1.randomUUID)(),
                                        text: columns.task.text
                                    }
                                ]
                            }
                        },
                        {
                            id: (0, crypto_1.randomUUID)(),
                            name: columns.name[1],
                            task: {
                                create: [
                                    {
                                        Id: (0, crypto_1.randomUUID)(),
                                        text: ''
                                    }
                                ]
                            }
                        },
                        {
                            id: (0, crypto_1.randomUUID)(),
                            name: '',
                            task: {
                                create: [
                                    {
                                        Id: (0, crypto_1.randomUUID)(),
                                        text: ''
                                    }
                                ]
                            }
                        },
                        {
                            id: (0, crypto_1.randomUUID)(),
                            name: '',
                            task: {
                                create: [
                                    {
                                        Id: (0, crypto_1.randomUUID)(),
                                        text: ''
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            include: {
                column: {
                    include: {
                        task: true
                    }
                }
            }
        });
        return {
            board,
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppController);
//# sourceMappingURL=app.controller.js.map