import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController{
    constructor(private livrosService: LivrosService){

    }
    
    @Get()
    async obterTodos(): Promise<Livro[]>{
        return await this.livrosService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param('id') param): Promise<Livro>{
        return await this.livrosService.obterUm(param);
    }

    @Post()
    async criar(@Body() produto: Livro){
        await this.livrosService.criar(produto)
        return;
    }

    @Put()
    async alterar(@Body() livro: Livro): Promise<[number,Livro[]]>{
        return this.livrosService.alterar(livro)
    }

    @Delete(':id')
    async apagar(@Param('id') id: number){
        await this.livrosService.apagar(id)
    }
}   