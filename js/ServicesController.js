/**
 * Created by victor on 07/02/2017.
 */
angular.module("ServicesApp").controller("ServicesController", function(){

    this.servicesActifs = 1;
    var self = this;

    this.services = [
        {
            "name": "Web Development",
            "price": 300,
            "active":true
        },
        {
            "name": "Design",
            "price": 400,
            "active":false
        },
        {
            "name": "Integration",
            "price": 250,
            "active":false
        },
        {
            "name": "Formation",
            "price": 220,
            "active":false
        }
    ];

    this.total = function(){

    };

    this.toggleActive = function(serviceAct) {
        if(serviceAct.active) {
            serviceAct.active = false;
            self.serviceActifs -= 1;
        }
        else {
            serviceAct.active = true;
            self.serviceActifs = 12;

        }
    };

});