import { Controller, Get, Param } from '@nestjs/common';
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
    getCardById(@Param('id') id: string) {
        const index = parseInt(id, 10);  // Convert id to a number
        console.log({ id, index  });
        return this.carsService.findCarById(index);
    }
}
