import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private readonly carsService: CarsService) {

    }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCardById(@Param('id', ParseIntPipe) id: number) {
          // Convert id to a number
        console.log({ id });
        throw new Error("Wrong id format");

        return this.carsService.findCarById(id);
    }

}
