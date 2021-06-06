import  app from "./App";

let theme = [
    ["theme-1","calc--theme-1"],
    ["theme-2","calc--theme-2"],
    ["theme-3","calc--theme-3"],
];


app.changeTheme(theme,"app");
app.screen = document.getElementById('screen');
app.print();