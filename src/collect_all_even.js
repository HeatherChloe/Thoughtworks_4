function collect_same_elements(collection_a, object_b) {
    var a = collection_a;
    var b = object_b;
    var rst = [];
    for(var i = 0; i < b.value.length; ++i){
        for(var j = 0; j < a.length; ++j){
            if(a[j].key == b.value[i]){
                rst.push(a[j].key);
            }
        }
    }
    return rst;
}
module.exports = collect_same_elements;
