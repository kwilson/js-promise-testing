module Test.Controllers {
    export class PeopleController {

        people: IPerson[];


        public static $inject = [
            "PeopleService"
        ];
        constructor(peopleService: Services.PeopleService) {
            peopleService.getPeople().then((data) => {
                this.people = data;
            });
        }

    }
}