function byValueExample(it) {
  console.log(`in byValueExample - received 'it' as ${it}`);
  it = it+it; // works for both numbers and strings ('polymorfic operator')
  console.log(`in byValueExample - 'it' is now ${it}`);
  return;
}  

function byReferenceExample(it) {""
  console.log(`byReferenceExampl received 'it' as ${JSON.stringify(it)}`);
  // since there's no polymorphic function/operator to accomodate both arrays and generic objects that I know of, we have to perform a simple test using the helpful function present in Array prototype:
  if (Array.isArray(it)) {
    it.push(4321);
  } else {
    it.foo = "BAR";
  }
  return;
}

exports.byValueExample = byValueExample;
exports.byReferenceExample = byReferenceExample;
