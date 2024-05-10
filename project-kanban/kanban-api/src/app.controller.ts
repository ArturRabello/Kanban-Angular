import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';

@Controller()
export class AppController {

  constructor(
    private prisma: PrismaService,
  ){}

  @Get()
  async getHello(@Body() body: any) {
    const { name, columns } = body;


    console.log(body);

    const board = await this.prisma.boards.create({
    data: {
        id: randomUUID(), // Substitua por um ID adequado
        name: name,
        column: {
          create: [
            {
              id: randomUUID (), // Substitua por um ID adequado
              name: columns.name[0],
              task: {
                create: [
                  {
                    Id: randomUUID (), // Substitua por um ID adequado
                    text: columns.task.text
                  }
                ]
              }
            }
            ,
            {
              id: randomUUID (), // Substitua por um ID adequado
              name: columns.name[1],
              task: {
                create: [
                  {
                    Id: randomUUID (), // Substitua por um ID adequado
                    text: ''
                  }
                ]

              }
            }
            ,
            {
              id: randomUUID (), // Substitua por um ID adequado
              name: '',
              task: {
                create: [
                  {
                    Id: randomUUID (), // Substitua por um ID adequado
                    text: ''
                  }
                ]
              }   
            }
            ,
            {
              id: randomUUID (), // Substitua por um ID adequado
              name: '',
              task: {
                create: [
                  {
                    Id: randomUUID (), // Substitua por um ID adequado
                    text: ''
                  }
                ]
              }   
            }
          ]
        }
      },
      include: { // Adicione esta parte
        column: {
          include: {
            task: true
          }
        }
      }
    });

    return{
      board,
    };
  }
}