function calculateBMI(weight, height){
    BMI = weight/height**2
    return BMI
}



function detectFatBitches(weight, height){
    const BMI = calculateBMI(weight, height)
    if (BMI <18.5) {
        console.log('Eat something bitch')
    } else if ( 18.5 <= BMI <= 24.5) {
        console.log("Daayummm girl!!!!!")
    } else if ( 24.5 <BMI < 29) {
        console.log("You're overweight")
    } else {
        console.log("Enter the gym you fat bitch!!!!")
    }
}


detectFatBitches(55, 1.66)