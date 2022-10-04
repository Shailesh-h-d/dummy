const a = 7;
const b = 8;

const invoke = () => {
    console.log(`invoked sum = ${a + b}`);
}

invoke();

module.exports.invoke = invoke;