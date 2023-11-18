const fs = require('fs');

let writeableStream = fs.createWriteStream('answers.txt');
// эквивалентоность и ее пояснение
writeableStream.write("Записывание ответов в файл - процесс репитативный.\n");
writeableStream.write("Не важно, записывается первый или 8 вопрос.\n");
writeableStream.write("Методология и способ записи отличаться не будет.\n");
writeableStream.write("Разве что при чтении ответов из файла и записи туда же.\n");
writeableStream.write("В этом случае будет необходим иной способ взаимодействия с файловой системой, рассмотренный в папке files\n");

/*
let readableStream = fs.createReadStream(
    'hello.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});
*/