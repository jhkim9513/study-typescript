// Java: Exception
// JavaScript: Error

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {
  // 
}

// catch 안에서 다른 문제가 발생했을 시 finally가 없기 때문에 closeFile()이 실행되지않음
function run() {
  const fileName = 'not exist!';
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log((`catched!!`));
    return;
  }

  closeFile(fileName);
  console.log(`closed!!`);
}
run();

function run2() {
  const fileName = 'not exist!';
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log((`catched!!`));
    return;
  } finally {
    closeFile(fileName);
    console.log(`closed!!`);
  }
}
run2();


