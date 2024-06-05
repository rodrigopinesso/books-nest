import app from "./app";

function main () {
    app.listen (3000, "localhost", () => {
        console.log ("Server ON")
    })
}

main()