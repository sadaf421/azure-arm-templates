module.exports = function(context) {
    context.log(JSON.stringify(context));
    context.res = { status: 200, body: 'Hello World' };
    context.done(null);
}
