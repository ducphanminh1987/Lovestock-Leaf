function* nextCharacter(str) {
  const subs = str.split(" ");
  let i = 0;
  while (i < subs.length) {
    yield subs[i];
    i++;
  }
}

function runTestcase(testcase) {
  const iterator = nextCharacter(testcase);
  const t = parseInt(iterator.next().value);
  let bPosition = 1;
  let aPosition = 1;
  let bTime = 0;
  let aTime = 0;
  for (let i = 0; i < t; i++) {
    let next = iterator.next().value;
    let nextPositionStr = iterator.next().value;
    let nextPosition = parseInt(nextPositionStr);
    if (next === "B") {
      bTime = Math.max(bTime + Math.abs(bPosition - nextPosition), aTime) + 1;
      bPosition = nextPosition;
    } else {
      aTime = Math.max(aTime + Math.abs(aPosition - nextPosition), bTime) + 1;
      aPosition = nextPosition;
    }
  }
  return Math.max(bTime, aTime);
}
