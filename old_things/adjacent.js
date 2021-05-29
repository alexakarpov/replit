function adj(ia) {
  let pairs = [];
  for(let i=0;i<ia.length-1;i++) {
      pairs.push([ia[i], ia[i+1]])
  }
  ps = pairs.map(([p1,p2]) => {
    return p1*p2;
  })
  return Math.max(...ps);
}

console.log(adj([1,2,3,4,5,6,7]));