import { faker } from '@faker-js/faker';

const stafflist = [
    {
        avatar: faker.image.animals(),
        book: faker.company.name(),
        name: "1 - "+faker.name.firstName() + " "+ faker.name.firstName(),
        description: "kaka"
    },
    {
        avatar: faker.image.business(),
        book: faker.company.name(),
        name: "2 - "+faker.name.firstName() + " "+ faker.name.firstName(),
        description: "chetan"
    },
    {
        avatar: faker.image.food(),
        book: faker.company.name(),
        name:"3 - "+ faker.name.firstName() + " "+ faker.name.firstName(),
        description: "hemant"
    }
]

export default stafflist