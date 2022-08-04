module.exports = function toReadable(number) {
    let numberArr = number.toString().split("");
    const from0to9 = (n) => {
        switch (n) {
            case "0":
                return "zero";
            case "1":
                return "one";
            case "2":
                return "two";
            case "3":
                return "three";
            case "4":
                return "four";
            case "5":
                return "five";
            case "6":
                return "six";
            case "7":
                return "seven";
            case "8":
                return "eight";
            case "9":
                return "nine";
            default:
                throw Error("Invalid number from 0 to 9");
        }
    };
    const from10to19 = (n) => {
        switch (n) {
            case "0":
                return "ten";
            case "1":
                return "eleven";
            case "2":
                return "twelve";
            case "3":
                return "thirteen";
            case "5":
                return "fifteen";
            case "8":
                return "eighteen";
            default:
                return from0to9(n) + "teen";
        }
    };
    const from20to29 = (n) => {
        switch (n) {
            case "0":
                return "twenty";
            default:
                return `twenty ${from0to9(n)}`;
        }
    };
    const from30to39 = (n) => {
        switch (n) {
            case "0":
                return "thirty";
            default:
                return `thirty ${from0to9(n)}`;
        }
    };
    const from40to49 = (n) => {
        switch (n) {
            case "0":
                return "forty";
            default:
                return `forty ${from0to9(n)}`;
        }
    };
    const from50to59 = (n) => {
        switch (n) {
            case "0":
                return "fifty";
            default:
                return `fifty ${from0to9(n)}`;
        }
    };
    const from60to69 = (n) => {
        switch (n) {
            case "0":
                return "sixty";
            default:
                return `sixty ${from0to9(n)}`;
        }
    };
    const from70to79 = (n) => {
        switch (n) {
            case "0":
                return "seventy";
            default:
                return `seventy ${from0to9(n)}`;
        }
    };
    const from80to89 = (n) => {
        switch (n) {
            case "0":
                return "eighty";
            default:
                return `eighty ${from0to9(n)}`;
        }
    };
    const from90to99 = (n) => {
        switch (n) {
            case "0":
                return "ninety";
            default:
                return `ninety ${from0to9(n)}`;
        }
    };
    if (numberArr.length === 1) {
        return from0to9(numberArr[0]);
    }
    const from10to99 = (
        firstDigitOfATwoDigitNumber,
        secondDigitOfATwoDigitNumber
    ) => {
        switch (firstDigitOfATwoDigitNumber) {
            case "0":
                return from0to9(secondDigitOfATwoDigitNumber);
            case "1":
                return from10to19(secondDigitOfATwoDigitNumber);
            case "2":
                return from20to29(secondDigitOfATwoDigitNumber);
            case "3":
                return from30to39(secondDigitOfATwoDigitNumber);
            case "4":
                return from40to49(secondDigitOfATwoDigitNumber);
            case "5":
                return from50to59(secondDigitOfATwoDigitNumber);
            case "6":
                return from60to69(secondDigitOfATwoDigitNumber);
            case "7":
                return from70to79(secondDigitOfATwoDigitNumber);
            case "8":
                return from80to89(secondDigitOfATwoDigitNumber);
            case "9":
                return from90to99(secondDigitOfATwoDigitNumber);
        }
    };
    if (numberArr.length === 2) {
        return from10to99(numberArr[0], numberArr[1]);
    }
    if (numberArr.length === 3) {
        if (numberArr[2] === "0" && numberArr[1] === "0") {
            return `${from0to9(numberArr[0])} hundred`;
        } else if (numberArr[1] === "0") {
            return `${from0to9(numberArr[0])} hundred ${from0to9(
                numberArr[2]
            )}`;
        } else
            return `${from0to9(numberArr[0])} hundred ${from10to99(
                numberArr[1],
                numberArr[2]
            )}`;
    }
};