exports.assertCollectionEquality = function(c1, c2) {
  if (!Array.isArray(c1) || !Array.isArray(c2)) {
    console.error('Both args must be arrays');
    return false;
  };

  if (c1.length != c2.length) {
    console.error('Arrays must have equal length');
    return false;
  };

  for (i in c1) if (c1[i] != c2[i]) return false;
  return true;
};
