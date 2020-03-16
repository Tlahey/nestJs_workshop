import { ApiProperty } from '@nestjs/swagger';

export class CatDTO {

    @ApiProperty({
        description: "cat's name"
    })
    name: string;

    @ApiProperty({
        description: "Age of the cat",
        minimum: 0,
        type: Number
    })
    age: number;

    @ApiProperty({
        description: "Cat description"
    })
    description: string;

    @ApiProperty({
        description: "The cat are still alive ?",
        type: Boolean
    })
    isAlive: boolean;

}