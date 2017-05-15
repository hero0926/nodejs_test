/**
 * Created by 207-003 on 2017-05-15.
 */

function hoistingTest() {

    var age=40;

    var message = "뭐가나오게?";

    if (age > 30){
        var message = "30대가 넘었다";
    }

    console.log(age);
    console.log(message);

}

hoistingTest();

function calculator(one, two) {

    console.log(one+two + arguments[0]);

}

calculator(50, 60, 70);