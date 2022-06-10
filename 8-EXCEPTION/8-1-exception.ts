// Java : Exception 클래스 존재
// JavaScript : Error 클래스 존재
{
  // Error(Exception) Handling 순서: try -> catch -> finally
  function readFile(fileName: string): string {
    if (fileName === '!fileName') {
      throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents';
  }

  function closeFile(fileName: string) {
    //
  }

  const fileName = 'fileName';
  try {
    console.log(readFile(fileName));
  } catch (err) {
    // catch : try문 안의 코드에서 에러가 발생하면 catch문 실행 - 그냥 에러를 던지면 프로그램이 멈추지만, catch문을 통해 지속적으로 실행 가능
    console.log(`catched!!`);
  } finally {
    // finally : 에러가 발생하지 않던 발생하던 항상 마지막에 실행되는 코드
    closeFile(fileName);
    console.log(`finally!!`);
  }
  console.log('!!!');
}
