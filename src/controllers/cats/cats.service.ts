import { Injectable } from '@nestjs/common';
import { CatDTO } from './dto/cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cats.entity';
import { Repository } from 'typeorm';
import { MyLogger } from 'src/utils/logger';

@Injectable()
export class CatsService {

    constructor(
        @InjectRepository(Cat)
        private readonly catRepository: Repository<Cat>
    ) {

    }

    private readonly logger = new MyLogger(CatsService.name);

    async create(cat: CatDTO) {
        this.logger.debug("create", "A new cat has born ! ", cat);

        const newCat = new Cat();
        newCat.age = cat.age;
        newCat.description = cat.description;
        newCat.isAlive = cat.isAlive;
        newCat.name = cat.name;

        const dbCat = this.catRepository.create(cat);
        return await this.catRepository.save(dbCat);
    }

    find(): Promise<Cat[]> {
        this.logger.debug("find", `Where is my cat ?`);
        return this.catRepository.find();
    }

    async delete(catId: string) {
        await this.catRepository.findOneOrFail(catId);
        await this.catRepository.delete(catId);
        this.logger.debug("delete", `Die cat Die !`, catId);
        return true;
    }

    async patch(catId: string, cat: CatDTO) {
        await this.catRepository.findOneOrFail(catId);
        await this.catRepository.update(catId, cat);
        return this.catRepository.findOne(catId);
    }

}
