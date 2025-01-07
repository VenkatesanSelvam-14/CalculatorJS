(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.bt');
    let clear = document.querySelector('.but-clear');
    let equal = document.querySelector('.but-equal');
    let singleclear = document.querySelector('.but-singleclear');

    buttons.forEach(function (button) {

        button.addEventListener('click', function (e) {

            if (screen.value === "Error") {
                return;
            }
            if (screen.value === '0') {
                if (e.target.value === "/" || e.target.value === "*" || e.target.value === "-" || e.target.value === "+") {
                    let value = e.target.value;
                    if (value !== undefined) {
                        screen.value += value;
                    }
                }
                else {
                    let value = e.target.value;
                    if (value !== undefined) {
                        screen.value = value;
                    }
                }

            }

            else {
                if (e.target.value === "/" || e.target.value === "*" || e.target.value === "-" || e.target.value === "+") {

                    console.log('Hello WOrld');
                    let lastChar = screen.value.charAt(screen.value.length - 1);
                    console.log(lastChar);

                    if (lastChar === "/" || lastChar === "*" || lastChar === "-" || lastChar === "+") {
                        screen.value = screen.value.slice(0, -1) + e.target.value;

                    }
                    else {
                        let value = e.target.value;
                        if (value !== undefined) {
                            screen.value += value;
                        }
                    }

                }
                else if (e.target.value === ".") {
                    let rev = screen.value.split('').reverse().join('');
                    if (rev.indexOf(e.target.value) === -1) {
                        let value = e.target.value;
                        if (value !== undefined) {
                            screen.value += value;
                        }
                    }

                    else if (rev.indexOf(e.target.value) > rev.indexOf('/') || rev.indexOf(e.target.value) > rev.indexOf('-') ||
                        rev.indexOf(e.target.value) > rev.indexOf('*') || rev.indexOf(e.target.value) > rev.indexOf('+')) {
                        let value = e.target.value;
                        if (value !== undefined) {
                            screen.value += value;
                        }
                    }
                    else {
                        let value = e.target.value;
                        if (value !== undefined) {
                            screen.value += value;
                        }
                    }

                }
                else {
                    let value = e.target.value;
                    if (value !== undefined) {
                        screen.value += value;
                    }

                }

            }

        });
    });

    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "Please enter";
        } else {
            try {
                let answer = eval(screen.value);
                screen.value = answer;
            } catch (error) {
                screen.value = "Error";
            }
        }
    });

    clear.addEventListener('click', function (e) {
        screen.value = "0";
    });

    singleclear.addEventListener('click', function (e) {
        let temp = screen.value.substring(0, screen.value.length - 1);

        if (temp === '') {
            screen.value = "0";
        }
        else if (screen.value === "Error") {
            screen.value = "0";
        }
        else {
            screen.value = temp;
        }

    });
})()