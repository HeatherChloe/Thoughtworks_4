function collect_same_elements(collection_a, object_b) {
    var a = collection_a;
    var b = object_b;
    var rst = [];
    var i = 0;
    for(x in a)
    {
        for(i = 0; i < b.value.length; ++i)
        {
            if(a[x].key == b.value[i])
            {
                 rst.push(a[x].key);
            }
        }
    }
     return(rst);
}
module.exports = collect_same_elements;
