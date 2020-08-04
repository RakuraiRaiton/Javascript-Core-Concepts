class Course {
    constructor(title,lenght,price, ){
        this.title = title;
        this.lenght = lenght;
        this.price = price;
        this.pricePerLenght();
        this.courseSummary();
    }

    set showPrice(){

    }

    get positivePrice(){
        if (this.price < 0) {
            console.log('you cant set negative price numbers');
        }

        return `\$ ${this.price}`
    }

    pricePerLenght(){
        return this.lenght / this.price ;
    }

    courseSummary(){
        return `Title:${this.title} Lenght:${this.lenght}hrs Price:\$${this.price}`;
    }
}

class PracticalCourse extends Course { 

    constructor(numbOfExercises){
        super();
        this.numbOfExercises = numbOfExercises;
        this.printCourse();
    }
    
    printCourse(){
        const javascriptCourse = new Course('Javascript the complete guide', 45, 13.99);        
        console.log(javascriptCourse.courseSummary());
        console.log(`Price Per Lenght \$${javascriptCourse.pricePerLenght().toFixed(2)} Number of Exercises: ${this.numbOfExercises}`);
    }
}

class TheoreticalCourse extends Course {
    constructor(){
        super();
        this.printCourse();
        this.publish();
    }
    
    publish(){
       return 'calling one of Theoretical course methods: publish';
    }
    printCourse(){
        const angularCourse = new Course('Angular the complete guide', 27, 9.99);
        console.log(angularCourse.courseSummary());
        console.log(`Price Per Lenght \$${angularCourse.pricePerLenght().toFixed(2)} Methods Of TheoreticalCourse: ${this.publish()}`);

    }

}

const javascriptCourse = new PracticalCourse(45);
const angularCourse = new TheoreticalCourse();
// console.log(angularCourse.courseSummary());
// console.log(javascriptCourse.courseSummary());
// console.log(`Number of exercise for Javascript: ${javascriptCourse.numbOfExercises}`);
// console.log(angularCourse.publish());
