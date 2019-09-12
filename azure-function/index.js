module.exports = function(context, req) {
    context.log(JSON.stringify(context));
    context.res = { status: 200, body: 'Hello World' };
    context.done(null);
}
