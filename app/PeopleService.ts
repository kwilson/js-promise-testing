module Test {

    export interface IPeopleService {
        getData(): ng.IPromise<IPerson>
    }   

    export class PeopleService implements IPeopleService {

        public static $inject = [
            "$q",
            "$http"
        ];
        constructor(
            private $q: ng.IQService, 
            private $http: ng.IHttpService) {
        }

        getData(): ng.IPromise<IPerson> {
            var url = "/api/people";
            return new this.$q<IPerson>((resolve: ng.IQResolveReject<IPerson>, reject: ng.IQResolveReject<string>) => {
                this.$http
                    .get<IPerson>(url)
                    .success((data) => {
                        resolve(data);
                    })
                    .error(() => {
                        reject("Error reading people");
                    });
            });
        }
    }
}