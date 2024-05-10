import { PrismaService } from './database/prisma.service';
export declare class AppController {
    private prisma;
    constructor(prisma: PrismaService);
    getHello(body: any): Promise<{
        board: {
            column: ({
                task: {
                    Id: string;
                    text: string;
                    columnID: string;
                }[];
            } & {
                id: string;
                name: string;
                boardId: string;
            })[];
        } & {
            id: string;
            name: string;
        };
    }>;
}
