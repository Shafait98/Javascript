let framework =
{
language: 'javascript',
engine: 'chromium base V8 engine',
compiler: 'Just-In-Time compiler',
frameworks:
{
frontEnd: 'React.js',
backEnd: 'next.js',
additionalFramework: 
{
    routing: 'express.js'
}
}
};

delete framework.engine; // deleting engine property from object
console.log(framework);

console.log(framework.frameworks.frontEnd); // calling nested elements