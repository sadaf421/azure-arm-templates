module.exports = function(context, req) {
    context.res = {
        // status defaults to 200 */
        body: "Express JS Hello World App!!!"
    };
    context.done();
};
