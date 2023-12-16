$(document).ready(function () {
    let firstNum = $(".firstNum");
    let secoundNum = $(".secoundNum");
    let operatorShow = $(".operatorShow");
    let resultContent = $(".resultContent");

    let firstNumber = "";
    let secoundNumber = "";
    let chooseOperator = null;
    let result = null;
    let acceptSecoundNumber = false;


    function menimsetme(num) {
        if (acceptSecoundNumber) {
            secoundNumber += num;
            secoundNum.text(secoundNumber).fadeIn(500);
            return;
        }

        firstNumber += num;
        firstNum.text(firstNumber).fadeIn(500);
    };
    function operatorIsi(op) {
        chooseOperator = op;
        acceptSecoundNumber = true;
        operatorShow.text(chooseOperator).fadeIn(500);
    };
    function beraberdir() {

        console.log("firstNumber", firstNumber);
        console.log("chooseOperator", chooseOperator);
        console.log("secoundNumber", secoundNumber);
        console.log("acceptSecoundNumber", acceptSecoundNumber);

        switch (chooseOperator) {
            case "+":
                result = +firstNumber + +secoundNumber;
                break;
            case "-":
                result = +firstNumber - +secoundNumber;
                break;
            case "*":
                result = +firstNumber * +secoundNumber;
                break;
            case "/":
                result = +firstNumber / +secoundNumber;
                break;
            default:
                alert("Error");
        }
        resultContent.text(result).fadeIn(1000);

    };

    $(document).on("click", ".btn", function () {
        let button = $(this);
        //burada button btn.num.operator classi gosderir 
        let btnValue = button.text();
        //bele olduqda ise yeni button.text() edikde uzerine basdqlarimizin deyerlerini gosderir
        if (button.hasClass("num")) {
            menimsetme(btnValue);
        }
        else if (button.hasClass("operator")) {
            operatorIsi(btnValue);
        }
        else if (button.hasClass("del")) {

        }
        else {
            beraberdir();
        }
    });

});




// $(document).ready(function () {
//     let firstNum = $(".firstNum");
//     let secoundNum = $(".secoundNum");
//     let operatorShow = $(".operatorShow");
//     let resultContent = $(".resultContent");

//     let firstNumber = "";
//     let secoundNumber = "";
//     let chooseOperator = null;
//     let result = null;
//     let acceptSecoundNumber = false;

//     function menimsetme(num) {
//         if (acceptSecoundNumber) {
//             secoundNumber += num;
//             secoundNum.text(secoundNumber).fadeIn(500);
//             return;
//         }

//         firstNumber += num;
//         firstNum.text(firstNumber).fadeIn(500);
//     }

//     function operatorIsi(op) {
//         chooseOperator = op;
//         acceptSecoundNumber = true;
//         operatorShow.text(chooseOperator).fadeIn(500);
//     }

//     function beraberdir() {
//         console.log("firstNumber", firstNumber);
//         console.log("chooseOperator", chooseOperator);
//         console.log("secoundNumber", secoundNumber);
//         console.log("acceptSecoundNumber", acceptSecoundNumber);

//         switch (chooseOperator) {
//             case "+":
//                 result = parseFloat(firstNumber) + parseFloat(secoundNumber);
//                 break;
//             case "-":
//                 result = parseFloat(firstNumber) - parseFloat(secoundNumber);
//                 break;
//             case "*":
//                 result = parseFloat(firstNumber) * parseFloat(secoundNumber);
//                 break;
//             case "/":
//                 result = parseFloat(firstNumber) / parseFloat(secoundNumber);
//                 break;
//             default:
//                 alert("Error");
//         }

//         resultContent.text(result).fadeIn(1000);
//     }

//     $(document).on("click", ".btn", function () {
//         let button = $(this);
//         let btnValue = button.text();

//         if (button.hasClass("num")) {
//             menimsetme(btnValue);
//         } else if (button.hasClass("operator")) {
//             operatorIsi(btnValue);
//         } else if (button.hasClass("del")) {
//             // Silme işlemi eklenebilir, gerektiğinde düzenleyin
//         } else {
//             beraberdir();
//         }
//     });
// });
