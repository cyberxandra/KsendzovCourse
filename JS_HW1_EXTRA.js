// 1 
const checkAge = function(age) {
    let age_1 = 10;
    let age_2 = 18; 
    let age_3 = 60;
    
    if (age < age_2) {
        console.log ("You don’t have access cause your age is " + age + ". It’s less than " + age_2)
    }
    
    else if (age >= age_2 && age < age_3) {
           console.log ("Welcome !")
    }
    
    else if (age > age_3) {
        console.log ("Keep calm and look Culture channel")
    }
    else {
        console.log ("Technical work")
    }
    }
    
    checkAge (17)
    checkAge (18)
    checkAge (61)
    
    // 2
    const checkAge = function(age) {
          if (typeof age == 'Number')  {
    
        if (age < age_2) {console.log ("You don’t have access cause your age is " + age + ". It’s less than " + age_2)}
            else if (age >= age_2 && age < age_3) {
               console.log ("Welcome !")
            }
            else if (age > age_3) {
            console.log ("Keep calm and look Culture channel")
        }
         else { console.log ("Technical work")
         
        }
        } else {console.log ("Error")
        }
    }
        checkAge ('qwerty')
    
    // 3
    const checkAge = function(age) {
        age = Number(age)
        if(!isNaN(age)) {
    
        if (age < age_2) {
            console.log ("You don’t have access cause your age is " + age + ". It’s less than " + age_2)
        }   else if (age >= age_2 && age < age_3) {
               console.log ("Welcome !")
        }   else if (age > age_3) {
            console.log ("Keep calm and look Culture channel")}
             else { console.log ("Technical work")}
            
        } else {console.log ("Error")}
    }
            checkAge (25)
            checkAge ('12')
            checkAge ('12qwerty')
    
    let agePrompt = prompt("Enter age")
    checkAge(agePrompt)
    
    // 1*:
    // Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
    // Пример: const checkAge = function(age) {
    // Ваши преобразования
    // }
    // Вывести в консоль результат работы функции с возрастами 17, 18, 61
    
    // 2*:
    // Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
    
    // 3**:
    // Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
    
    // 4***:
    // Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке