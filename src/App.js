class App {

    static screen;

    /**
     * The objective of this function is to change the differents 
     * themes of application by listerning change event of the body
     * element.
     * @param {Array} theme associated array that have theme name 
     * as key and as value the class that activated the theme 
     * @param {string} app represent the id of app 
     */
    static changeTheme(theme, app) {
        let i = 0;
        let d = document.getElementById(app);
        let r;

        document.body.addEventListener("change", (e) => {
            theme.forEach((element, index, theme) => {

                if (e.target.id === element[0]) {

                    for (let i = 0; i < theme.length; i++) {
                        const el = theme[i];

                        if (element[1] !== el && d.classList.contains(el[1])) {
                            d.classList.remove(el[1]);
                        }
                    }

                    d.classList.add(element[1]);
                }
            });

        })

    }

    static #test(screen, data, e) {
        if ((data.length == 1 && data === '0')) {
            screen.textContent = e;
        } else {
            screen.textContent += e;
        }
    }

    static print() {
        document.body.addEventListener('click', (event) => {
            let data = this.screen.textContent;
            let e = event.target.textContent;

            switch (e) {
                case "0":
                    if (!(data.length == 1 && data === '0') && !(data[data.length - 1] === '/') && !(data[data.length - 1] === '+')
                        && !(data[data.length - 1] === '-') && !(data[data.length - 1] === 'x')
                        && !(data[data.length - 1] === '.')) {
                        this.screen.textContent += e;
                    }
                    break;

                case "1":

                    this.#test(this.screen, data, e);
                    break;
                case "2":
                    this.#test(this.screen, data, e);
                    break;
                case "3":
                    this.#test(this.screen, data, e);
                    break;
                case "4":
                    this.#test(this.screen, data, e);
                    break;
                case "5":
                    this.#test(this.screen, data, e);
                    break;
                case "6":
                    this.#test(this.screen, data, e);
                    break;
                case "7":
                    this.#test(this.screen, data, e);
                    break;
                case "8":
                    this.#test(this.screen, data, e);
                    break;
                case "9":
                    this.#test(this.screen, data, e);
                    break;

                case "x":
                    if (!(data[data.length - 1] === '/') && !(data[data.length - 1] === '+')
                        && !(data[data.length - 1] === '-') && !(data[data.length - 1] === 'x')
                        && !(data[data.length - 1] === '.')) {
                        this.screen.textContent += e;
                    }
                    break;

                case ".":
                    if (/^\d+((\.\d+){0,1}[-\+\/x]{1}\d*)*$/.test(data)) {
                        this.screen.textContent += e;
                    }

                    break;

                case "-":
                    if (!(data[data.length - 1] === '-') && !(data[data.length - 1] === '.')) {
                        this.screen.textContent += e;
                    }

                    if ((data.length == 1 && data === '0')) {
                        this.screen.textContent = e;
                    }

                    break;

                case "+":
                    if (!(data[data.length - 1] === '+') && !(data[data.length - 1] === '-')
                        && !(data[data.length - 1] === '/') && !(data[data.length - 1] === 'x')
                        && !(data[data.length - 1] === '.')) {
                        this.screen.textContent += e;
                    }
                    break;

                case "/":
                    if (!(data[data.length - 1] === '/') && !(data[data.length - 1] === '+')
                        && !(data[data.length - 1] === '-') && !(data[data.length - 1] === 'x')
                        && !(data[data.length - 1] === '.')) {
                        this.screen.textContent += e;
                    }
                    break;

                case "del":
                    data = data.substring(0, data.length - 1);
                    if (data.length == 0)
                        data = 0;
                    this.screen.textContent = data;
                    break;

                case "=":
                    if (!(data[data.length - 1] === '/') && !(data[data.length - 1] === '+')
                        && !(data[data.length - 1] === '-') && !(data[data.length - 1] === 'x')
                        && !(data[data.length - 1] === '.')) {
                        this.screen.textContent = this.#calculate(this.screen.textContent);
                    }
                    break;

                case "reset":
                    this.screen.textContent = '0';

                    break;

                default:
                    break;
            }
        });
    }


    static #calculate(op) {
        if (op.includes('x')) {
            op = op.replaceAll('x', '*');
        }
        return eval(op);
    }


}

export default App;