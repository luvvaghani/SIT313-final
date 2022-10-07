import { faker } from '@faker-js/faker';

const stafflist = [
    {
        avatar: faker.image.city(),
        book: faker.company.name(),
        name: "4 - "+faker.name.firstName() + " "+ faker.name.firstName(),
        description: "luv"
    },

    {
        avatar: faker.image.abstract(),
        book: faker.company.name(),
        name: "5 - "+faker.name.firstName() + " "+ faker.name.firstName(),
        description: "hemant"
    },

    {
        avatar: faker.image.cats(),
        book: faker.company.name(),
        name: "6 - "+faker.name.firstName() + " "+ faker.name.firstName(),
        description: "chetan"
    }
]

export default stafflist