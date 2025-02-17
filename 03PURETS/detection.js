function HaveFun(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val;
}
function HaveFun1(val) {
    if (val instanceof string) {
        return val.toUpperCase();
    }
    return val;
}
